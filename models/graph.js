const fs = require('fs');
const output = require('d3node-output');
const D3Node = require('d3-node');

const reports = require('./reports');

exports.createCsv = async function(year, callback){
	var data = await reports.get(year);
	var previousYear = await reports.get(parseInt(year)-1);
	data = data[0];
	previousYear = previousYear[0];
	var fileData = ',Fiscal Year: ' + data.fiscalYear + ',\n';
	for(var typeKey in data.report){
		var type = data.report[typeKey];
		fileData += '\n\n,' + type.title + ',\n';
		for(var activityKey in type.activities){
			var activity = type.activities[activityKey];
			if(activity.title)
				fileData += activity.title + ',,\n';
			var totals = {};
			for(var datumKey in activity.data){
				var datum = activity.data[datumKey];
				if(activity.title != 'Group Usage'){
					fileData += datum.title.replace(/,/g, '.');
					for(var inputKey in datum.inputs){
						var input = datum.inputs[inputKey];
						fileData += ',' + input.placeholder + ':';
						if(!input.value)
							input.value = 0;
						fileData += input.value;
						if(totals[input.placeholder]){
							totals[input.placeholder].value += parseInt(input.value);
						}else{
							totals[input.placeholder] = {
								placeholder: input.placeholder,
								value: input.value
							}
						}
						if(activity.title == 'Database' || !activity.title){
							var prevYearTotal = previousYear.report[typeKey].activities[activityKey].data[datumKey].inputs[inputKey].value;
							if(!prevYearTotal)
								prevYearTotal = 0;
							fileData += ',Yearly Accumulation: ' + (input.value - prevYearTotal) + ',';
						}
					}
					fileData += '\n';
				}else{
					fileData += datum.title + ',';
					if(datum.inputs.length > 1)
						fileData += ',Total Count: ' + (datum.inputs.length-1).toString() + '\n';
					else
						fileData += ',\n'
					for(var group of datum.inputs){
						if(group.groupName)
							fileData += ',' + group.groupName + ',\n';
					}
				}
			}
			if(activity.title!= 'Database' && activity.title){
				fileData += 'Totals:,';
				for(var input in totals){
					input = totals[input];
					fileData += input.placeholder + ':';
					if(!input.value)
						input.value = 0;
					fileData += input.value + ',';
				}
				fileData += '\n';
			}
		}
	}
	fs.writeFileSync('./output/report.csv', fileData);
	setTimeout(callback, 1000);
}

exports.createTotalGraph = async function(callback){
	var data = await reports.getTotalDataset();
	// create output files
	output('./output/output', line(data));
	setTimeout(callback, 1000);
}

exports.createDatabaseGraph = async function(callback){
	var data = await reports.getDatabaseDataset();
	// create output files
	data = data.filter(function(val){
		return parseInt(val.fiscalYear) > 1990;
	});
	
	output('./output/output', multiLine(data));
	setTimeout(callback, 1000);
}

var multiLine = function(data){
	var selector = '#chart';
	var container = `
	<div id="container">
		<h2>Line Chart</h2>
		<div id="chart"></div>
	</div>
	`;
	var _width = 960;
	var _height = 500;
	var margin = { top: 20, right: 20, bottom: 60, left: 50 };
	var lineWidth = 1.5;
	var tickSize = 5;
	var tickPadding = 5;

const d3n = new D3Node({
	selector: selector,
	container: container,
	});

	const d3 = d3n.d3;

	const width = _width - margin.left - margin.right;
	const height = _height - margin.top - margin.bottom;

	const svg = d3n.createSVG(_width, _height)
		.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`);

	
	// parse the date / time
	var parseTime = d3.timeParse("%Y");

	// set the ranges
	var x = d3.scaleTime().range([0, width]);
	var y = d3.scaleLinear().range([height, 0]);

	// define the 1st line
	var valueline = d3.line()
		.x(function(d) { return x(d.fiscalYear); })
		.y(function(d) { return y(d.specimenTotal); });

	// valueline.curve(d3.curveBasis);//Smooths data transition

	// define the 2nd line
	var valueline2 = d3.line()
		.x(function(d) { return x(d.fiscalYear); })
		.y(function(d) { return y(d.totalEntered); });

	// valueline2.curve(d3.curveBasis);

	// define the 2nd line
	var valueline3 = d3.line()
		.x(function(d) { return x(d.fiscalYear); })
		.y(function(d) { return y(d.totalImaged); });

	// valueline3.curve(d3.curveBasis);

	// append the svg obgect to the body of the page
	// appends a 'group' element to 'svg'
	// moves the 'group' element to the top left margin
	const g = svg.append('g')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
		.append('g')
			.attr('transform',
				'translate(' + margin.left + ',' + margin.top + ')');

	// format the data
	data.forEach(function(d) {
		d.fiscalYear = parseTime(d.fiscalYear);
		if(d.specimenTotal)
			d.specimenTotal = +d.specimenTotal;
		else
			d.specimenTotal = 0;
		if(d.totalEntered)
			d.totalEntered = +d.totalEntered;
		else
			d.totalEntered = 0;
		if(d.totalImaged)
			d.totalImaged = +d.totalImaged;
		else
			d.totalImaged = 0;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.fiscalYear; }));
	y.domain([0, d3.max(data, function(d) {
		return Math.max(d.specimenTotal, d.totalEntered, d.totalImaged); })]);

	// Add the valueline path.
	svg.append('path')
		.data([data])
		.attr('fill', 'none')
		.attr('class', 'line')
		.attr('stroke-width', lineWidth)
		.style('stroke', 'steelblue')
		.attr('d', valueline);

	// Add the valueline2 path.
	svg.append('path')
		.data([data])
		.attr('fill', 'none')
		.attr('class', 'line')
		.attr('stroke-width', lineWidth)
		.style('stroke', 'red')
		.attr('d', valueline2);

	// Add the valueline3 path.
	// svg.append('path')
	// 	.data([data])
	// 	.attr('fill', 'none')
	// 	.attr('class', 'line')
	// 	.attr('stroke-width', lineWidth)
	// 	.style('stroke', 'green')
	// 	.attr('d', valueline3);

	// Add the X Axis
	svg.append('g')
		.attr('transform', 'translate(0,' + height + ')')
		// .style("font", "24px times")
		.style("font-size", "6px")
		.attr("class", "axis")
		.call(d3.axisBottom(x));

	// Add the Y Axis
	svg.append('g')
		// .style("font", "24px times")
		.style("font-size", "6px")
		.attr("class", "axis")
		.call(d3.axisLeft(y));

	//Add legend
	// svg.append('g')
	// 	.attr('class','legend')
	// 	.attr('transform','translate(50,30)')
	// 	.style('font-size','12px')
	// 	.call(d3.legend)

	return d3n;
}

var line = function(data){
	var selector = '#chart';
	var container = `
	<div id="container">
		<h2>Line Chart</h2>
		<div id="chart"></div>
	</div>
	`;
	var _width = 960;
	var _height = 500;
	var margin = { top: 20, right: 20, bottom: 60, left: 75 };
	var lineWidth = 1.5;
	var tickSize = 5;
	var tickPadding = 5;

const d3n = new D3Node({
	selector: selector,
	container: container,
	});

	const d3 = d3n.d3;

	const width = _width - margin.left - margin.right;
	const height = _height - margin.top - margin.bottom;

	const svg = d3n.createSVG(_width, _height)
		.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`);

	
	// parse the date / time
	var parseTime = d3.timeParse("%Y");

	// set the ranges
	var x = d3.scaleTime().range([0, width]);
	var y = d3.scaleLinear().range([height, 0]);

	// define the 1st line
	var valueline = d3.line()
		.x(function(d) { return x(d.fiscalYear); })
		.y(function(d) { return y(d.specimenTotal); });

	// valueline.curve(d3.curveBasis);//Smooths data transition


	// append the svg obgect to the body of the page
	// appends a 'group' element to 'svg'
	// moves the 'group' element to the top left margin
	const g = svg.append('g')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
		.append('g')
			.attr('transform',
				'translate(' + margin.left + ',' + margin.top + ')');

	// format the data
	data.forEach(function(d) {
		d.fiscalYear = parseTime(d.fiscalYear);
		if(d.specimenTotal)
			d.specimenTotal = +d.specimenTotal;
		else
			d.specimenTotal = 0;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.fiscalYear; }));
	y.domain([0, d3.max(data, function(d) {
		return Math.max(d.specimenTotal); })]);

	// Add the valueline path.
	svg.append('path')
		.data([data])
		.attr('fill', 'none')
		.attr('class', 'line')
		.attr('stroke-width', lineWidth)
		.style('stroke', 'steelblue')
		.attr('d', valueline);

	// Add the X Axis
	svg.append('g')
		.attr('transform', 'translate(0,' + height + ')')
		.call(d3.axisBottom(x));

	// Add the Y Axis
	svg.append('g')
		.call(d3.axisLeft(y));

	//Add legend
	// svg.append('g')
	// 	.attr('class','legend')
	// 	.attr('transform','translate(50,30)')
	// 	.style('font-size','12px')
	// 	.call(d3.legend)

	return d3n;
}
