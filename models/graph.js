// const co = require('co');
// const generate = require('node-chartist');


// co(function * () {
// 	const options = {
// 		width: 400,
// 		height: 200,
// 		axisX: { title: 'X Axis (units)' },
// 		axisY: { title: 'Y Axis (units)' }
// 	};

// 	const line = yield generate('line', options, {
// 		labels: ['a', 'b', 'c', 'd', 'e'],
// 		series: [
// 			{name: 'Series 1', value: [1, 2, 3, 4, 5]},
// 			{name: 'Series 2', value: [3, 4, 5, 6, 7]}
// 		]
// 	});
// 	console.log(line)
// })
// co(function * () {

// 	// options object
// 	const options = {width: 400, height: 200};
// 	const data = {
// 		labels: ['a','b','c','d','e'],
// 		series: [
// 		[1, 2, 3, 4, 5],
// 		[3, 4, 5, 6, 7]
// 		]
// 	};
// 	const bar = yield generate('bar', options, data); //=> chart HTML


// 	// options function
// 	const options = (Chartist) => ({width: 400, height: 200, axisY: { type: Chartist.FixedScaleAxis } });
// 	const data = {
// 		labels: ['a','b','c','d','e'],
// 		series: [
// 		[1, 2, 3, 4, 5],
// 		[3, 4, 5, 6, 7]
// 		]
// 	};
// 	const bar = yield generate('bar', options, data); //=> chart HTML



// });

const fs = require('fs');
const output = require('d3node-output');
const D3Node = require('d3-node');
// const d3 = require('d3-node')().d3;

// const parseTime = d3.timeParse('%d-%m-%y');
// const formatTime = d3.timeFormat("%B-%d-%Y");

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
		var margin = { top: 20, right: 20, bottom: 60, left: 30 };
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
		var parseTime = d3.timeParse("%d-%b-%y");

		// set the ranges
		var x = d3.scaleTime().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);

		// define the 1st line
		var valueline = d3.line()
			.x(function(d) { return x(d.date); })
			.y(function(d) { return y(d.close); });

		valueline.curve(d3.curveBasis);//Smooths data transition

		// define the 2nd line
		var valueline2 = d3.line()
			.x(function(d) { return x(d.date); })
			.y(function(d) { return y(d.open); });

		valueline2.curve(d3.curveBasis);

		// define the 2nd line
		var valueline3 = d3.line()
			.x(function(d) { return x(d.date); })
			.y(function(d) { return y(d.test); });

		valueline3.curve(d3.curveBasis);

		// append the svg obgect to the body of the page
		// appends a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
		const g = svg.append('g')
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
			.append("g")
				.attr("transform",
					"translate(" + margin.left + "," + margin.top + ")");

		// format the data
		data.forEach(function(d) {
			d.date = parseTime(d.date);
			d.close = +d.close;
			d.open = +d.open;
			d.test = +d.test;
		});

		// Scale the range of the data
		x.domain(d3.extent(data, function(d) { return d.date; }));
		y.domain([0, d3.max(data, function(d) {
			return Math.max(d.close, d.open, d.test); })]);

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
		svg.append('path')
			.data([data])
			.attr('fill', 'none')
			.attr('class', 'line')
			.attr('stroke-width', lineWidth)
			.style('stroke', 'green')
			.attr('d', valueline3);

		// Add the X Axis
		svg.append('g')
			.attr('transform', 'translate(0,' + height + ')')
			.call(d3.axisBottom(x));

		// Add the Y Axis
		svg.append('g')
			.call(d3.axisLeft(y));

		//Add legend
		svg.append('g')
			.attr('class','legend')
			.attr('transform','translate(50,30)')
			.style('font-size','12px')
			.call(d3.legend)

		// });

		return d3n;
}

exports.createGraph = function(callback){
	// function line({
	// 	data,
	// 	selector: _selector = '#chart',
	// 	container: _container = `
	// 	<div id="container">
	// 		<h2>Line Chart</h2>
	// 		<div id="chart"></div>
	// 	</div>
	// 	`,
	// 	style: _style = '',
	// 	width: _width = 960,
	// 	height: _height = 500,
	// 	margin: _margin = { top: 20, right: 20, bottom: 60, left: 30 },
	// 	lineWidth: _lineWidth = 1.5,
	// 	lineColor: _lineColor = 'steelblue',
	// 	isCurve: _isCurve = true,
	// 	tickSize: _tickSize = 5,
	// 	tickPadding: _tickPadding = 5,
	// } = {}) {

	// 	// data.forEach(function(d){
	// 	// 	d.date = formatTime(d.key);
	// 	// })
	// 	const d3n = new D3Node({
	// 	selector: _selector,
	// 	svgStyles: _style,
	// 	container: _container,
	// 	});
	
	// 	const d3 = d3n.d3;
	
	// 	const width = _width - _margin.left - _margin.right;
	// 	const height = _height - _margin.top - _margin.bottom;
	
	// 	const svg = d3n.createSVG(_width, _height)
	// 		.append('g')
	// 		.attr('transform', `translate(${_margin.left}, ${_margin.top})`);
	
	// 	// const g = svg.append('g');
	
	// 	// const xScale = d3.scaleTime().range([0, width]);
	// 	// const yScale = d3.scaleLinear().range([height, 0]);
	// 	// const xAxis = d3.axisBottom(xScale)
	// 	// 	.tickSize(_tickSize)
	// 	// 	.tickPadding(_tickPadding);
	// 	// const yAxis = d3.axisLeft(yScale)
	// 	// 	.tickSize(_tickSize)
	// 	// 	.tickPadding(_tickPadding);
	
	// 	// const line = d3.line()
	// 	// 	.x(d => xScale(d.date))
	// 	// 	.y(d => yScale(d.value));

	// 	// line.curve(d3.curveBasis);
	
	// 	// xScale.domain(d3.extent(data, d => d.date));
	// 	// yScale.domain(d3.extent(data, d => d.value));
	
	// 	// g.append('g')
	// 	// .attr('transform', `translate(0, ${height})`)
	// 	// .call(xAxis);
	
	// 	// g.append('g').call(yAxis);
	
	// 	// g.append('path')
	// 	// .datum(data)
	// 	// .attr('fill', 'none')
	// 	// .attr('stroke', _lineColor)
	// 	// .attr('stroke-width', _lineWidth)
	// 	// .attr('d', line);
		
	// 	// parse the date / time
	// 	var parseTime = d3.timeParse("%d-%b-%y");

	// 	// set the ranges
	// 	var x = d3.scaleTime().range([0, width]);
	// 	var y = d3.scaleLinear().range([height, 0]);

	// 	// define the 1st line
	// 	var valueline = d3.line()
	// 		.x(function(d) { return x(d.date); })
	// 		.y(function(d) { return y(d.close); });

	// 	valueline.curve(d3.curveBasis);//Smooths data transition

	// 	// define the 2nd line
	// 	var valueline2 = d3.line()
	// 		.x(function(d) { return x(d.date); })
	// 		.y(function(d) { return y(d.open); });

	// 	valueline2.curve(d3.curveBasis);

	// 	// append the svg obgect to the body of the page
	// 	// appends a 'group' element to 'svg'
	// 	// moves the 'group' element to the top left margin
	// 	// var svg = d3.select("body").append("svg")
	// 	// 	.attr("width", width + margin.left + margin.right)
	// 	// 	.attr("height", height + margin.top + margin.bottom)
	// 	// .append("g")
	// 	// 	.attr("transform",
	// 	// 		"translate(" + margin.left + "," + margin.top + ")");
	// 	const g = svg.append('g')
	// 			.attr("width", width + _margin.left + _margin.right)
	// 			.attr("height", height + _margin.top + _margin.bottom)
	// 		.append("g")
	// 			.attr("transform",
	// 				"translate(" + _margin.left + "," + _margin.top + ")");

	// 	// Get the data
	// 	// d3.csv("data2.csv", function(error, data) {
	// 	// if (error) throw error;

	// 	// format the data
	// 	data.forEach(function(d) {
	// 		d.date = parseTime(d.date);
	// 		d.close = +d.close;
	// 		d.open = +d.open;
	// 	});

	// 	// Scale the range of the data
	// 	x.domain(d3.extent(data, function(d) { return d.date; }));
	// 	y.domain([0, d3.max(data, function(d) {
	// 		return Math.max(d.close, d.open); })]);

	// 	// Add the valueline path.
	// 	svg.append('path')
	// 		.data([data])
	// 		.attr('fill', 'none')
	// 		.attr('class', 'line')
	// 		.attr('stroke-width', _lineWidth)
	// 		.style('stroke', 'steelblue')
	// 		.attr('d', valueline);

	// 	// Add the valueline2 path.
	// 	svg.append('path')
	// 		.data([data])
	// 		.attr('fill', 'none')
	// 		.attr('class', 'line')
	// 		.attr('stroke-width', _lineWidth)
	// 		.style('stroke', 'red')
	// 		.attr('d', valueline2);

	// 	// Add the X Axis
	// 	svg.append('g')
	// 		.attr('transform', 'translate(0,' + height + ')')
	// 		.call(d3.axisBottom(x));

	// 	// Add the Y Axis
	// 	svg.append('g')
	// 		.call(d3.axisLeft(y));

	// 	// });

	// 	return d3n;
	// }
	

	// create output files
	output('./output/output', multiLine(data));
	setTimeout(callback, 1000);
}

const data = [
	{
		date: "1-May-12",
		close: 68.13,
		open: 34.12,
		test: 10.0
	},	
	{
		date: "30-Apr-12",
		close: 63.98,
		open: 45.56,
		test: 10.0
	},	
	{
		date: "27-Apr-12",
		close: 67.00,
		open: 67.89,
		test: 10.0
	},	
	{
		date: "26-Apr-12",
		close: 89.70,
		open: 78.54,
		test: 10.0
	},	
	{
		date: "25-Apr-12",
		close: 99.00,
		open: 89.23,
		test: 10.0
	},	
	{
		date: "24-Apr-12",
		close: 130.28,
		open: 99.23,
		test: 10.0
	},	
	{
		date: "23-Apr-12",
		close: 166.70,
		open: 101.34,
		test: 10.0
	},	
	{
		date: "20-Apr-12",
		close: 234.98,
		open: 122.34,
		test: 10.0
	},	
	{
		date: "19-Apr-12",
		close: 345.44,
		open: 134.56,
		test: 10.0
	},	
	{
		date: "18-Apr-12",
		close: 443.34,
		open: 160.45,
		test: 10.0
	},	
	{
		date: "17-Apr-12",
		close: 543.70,
		open: 180.34,
		test: 10.0
	},	
	{
		date: "16-Apr-12",
		close: 580.13,
		open: 210.23,
		test: 10.0
	},	
	{
		date: "13-Apr-12",
		close: 605.23,
		open: 223.45,
		test: 10.0
	},	
	{
		date: "12-Apr-12",
		close: 622.77,
		open: 201.56,
		test: 10.0
	},	
	{
		date: "11-Apr-12",
		close: 626.20,
		open: 212.67,
		test: 10.0
	},	
	{
		date: "10-Apr-12",
		close: 628.44,
		open: 310.45,
		test: 10.0
	},	
	{
		date: "9-Apr-12",
		close: 636.23,
		open: 350.45,
		test: 10.0
	},	
	{
		date: "5-Apr-12",
		close: 633.68,
		open: 410.23,
		test: 10.0
	},	
	{
		date: "4-Apr-12",
		close: 624.31,
		open: 430.56,
		test: 10.0
	},	
	{
		date: "3-Apr-12",
		close: 629.32,
		open: 460.34,
		test: 10.0
	},	
	{
		date: "2-Apr-12",
		close: 618.63,
		open: 510.34,
		test: 10.0
	},	
	{
		date: "30-Mar-12",
		close: 599.55,
		open: 534.23,
		test: 10.0
	},	
	{
		date: "29-Mar-12",
		close: 609.86,
		open: 578.23,
		test: 10.0
	},	
	{
		date: "28-Mar-12",
		close: 617.62,
		open: 590.12,
		test: 10.0
	},	
	{
		date: "27-Mar-12",
		close: 614.48,
		open: 560.34,
		test: 10.0
	},	
	{
		date: "26-Mar-12",
		close: 606.98,
		open: 580.12,
		test: 10.0
	},	
	
]
