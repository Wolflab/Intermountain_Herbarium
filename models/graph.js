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

// const fs = require('fs');
// const output = require('d3node-output');
// const D3Node = require('d3-node');
// const d3 = require('d3-node')().d3;

// // const parseTime = d3.timeParse('%d-%b-%y');

// exports.createGraph = function(callback){
// 	function line({
// 		data,
// 		selector: _selector = '#chart',
// 		container: _container = `
// 		<div id="container">
// 			<h2>Line Chart</h2>
// 			<div id="chart"></div>
// 		</div>
// 		`,
// 		style: _style = '',
// 		width: _width = 960,
// 		height: _height = 500,
// 		margin: _margin = { top: 20, right: 20, bottom: 60, left: 30 },
// 		lineWidth: _lineWidth = 1.5,
// 		lineColor: _lineColor = 'steelblue',
// 		isCurve: _isCurve = true,
// 		tickSize: _tickSize = 5,
// 		tickPadding: _tickPadding = 5,
// 	} = {}) {
// 		const d3n = new D3Node({
// 		selector: _selector,
// 		svgStyles: _style,
// 		container: _container,
// 		});
	
// 		const d3 = d3n.d3;
	
// 		const width = _width - _margin.left - _margin.right;
// 		const height = _height - _margin.top - _margin.bottom;
	
// 		const svg = d3n.createSVG(_width, _height)
// 			.append('g')
// 			.attr('transform', `translate(${_margin.left}, ${_margin.top})`);
	
// 		const g = svg.append('g');
	
// 		const xScale = d3.scaleLinear()
// 			.rangeRound([0, width]);
// 		const yScale = d3.scaleLinear()
// 			.rangeRound([height, 0]);
// 		const xAxis = d3.axisBottom(xScale)
// 			.tickSize(_tickSize)
// 			.tickPadding(_tickPadding);
// 		const yAxis = d3.axisLeft(yScale)
// 			.tickSize(_tickSize)
// 			.tickPadding(_tickPadding);
	
// 		const lineChart = d3.line()
// 			.x(d => xScale(d.key))
// 			.y(d => yScale(d.value));

// 		if (_isCurve) lineChart.curve(d3.curveBasis);
	
// 		xScale.domain(d3.extent(data, d => d.key));
// 		yScale.domain(d3.extent(data, d => d.value));
	
// 		g.append('g')
// 		.attr('transform', `translate(0, ${height})`)
// 		.call(xAxis);
	
// 		g.append('g').call(yAxis);
	
// 		g.append('path')
// 		.datum(data)
// 		.attr('fill', 'none')
// 		.attr('stroke', _lineColor)
// 		.attr('stroke-width', _lineWidth)
// 		.attr('d', lineChart);

// 		return d3n;
// 	}
	

// 	// create output files
// 	output('./output/output', line({ data: data }));
// 	setTimeout(callback, 1000);
// }

// const data = [
// 	{
// 		"key": new Date("2007-04-24T06:00:00.000Z"),
// 		"value": 93.24
// 	},
// 	{
// 		"key": new Date("2007-04-25T06:00:00.000Z"),
// 		"value": 95.35
// 	},
// 	{
// 		"key": new Date("2007-04-26T06:00:00.000Z"),
// 		"value": 98.84
// 	},
// 	{
// 		"key": new Date("2007-04-27T06:00:00.000Z"),
// 		"value": 99.92
// 	},
// 	{
// 		"key": new Date("2007-04-30T06:00:00.000Z"),
// 		"value": 99.8
// 	},
// 	{
// 		"key": new Date("2007-05-01T06:00:00.000Z"),
// 		"value": 99.47
// 	},
// 	{
// 		"key": new Date("2007-05-02T06:00:00.000Z"),
// 		"value": 100.39
// 	},
// 	{
// 		"key": new Date("2007-05-03T06:00:00.000Z"),
// 		"value": 100.4
// 	},
// 	{
// 		"key": new Date("2007-05-04T06:00:00.000Z"),
// 		"value": 100.81
// 	},
// 	{
// 		"key": new Date("2007-05-07T06:00:00.000Z"),
// 		"value": 103.92
// 	},
// 	{
// 		"key": new Date("2007-05-08T06:00:00.000Z"),
// 		"value": 105.06
// 	},
// 	{
// 		"key": new Date("2007-05-09T06:00:00.000Z"),
// 		"value": 106.88
// 	},
// 	{
// 		"key": new Date("2007-05-10T06:00:00.000Z"),
// 		"value": 107.34
// 	},
// 	{
// 		"key": new Date("2007-05-11T06:00:00.000Z"),
// 		"value": 108.74
// 	},
// 	{
// 		"key": new Date("2007-05-14T06:00:00.000Z"),
// 		"value": 109.36
// 	},
// 	{
// 		"key": new Date("2007-05-15T06:00:00.000Z"),
// 		"value": 107.52
// 	},
// 	{
// 		"key": new Date("2007-05-16T06:00:00.000Z"),
// 		"value": 107.34
// 	},
// 	{
// 		"key": new Date("2007-05-17T06:00:00.000Z"),
// 		"value": 109.44
// 	},
// 	{
// 		"key": new Date("2007-05-18T06:00:00.000Z"),
// 		"value": 110.02
// 	},
// 	{
// 		"key": new Date("2007-05-21T06:00:00.000Z"),
// 		"value": 111.98
// 	},
// 	{
// 		"key": new Date("2007-05-22T06:00:00.000Z"),
// 		"value": 113.54
// 	},
// 	{
// 		"key": new Date("2007-05-23T06:00:00.000Z"),
// 		"value": 112.89
// 	},
// 	{
// 		"key": new Date("2007-05-24T06:00:00.000Z"),
// 		"value": 110.69
// 	},
// 	{
// 		"key": new Date("2007-05-25T06:00:00.000Z"),
// 		"value": 113.62
// 	},
// 	{
// 		"key": new Date("2007-05-29T06:00:00.000Z"),
// 		"value": 114.35
// 	},
// 	{
// 		"key": new Date("2007-05-30T06:00:00.000Z"),
// 		"value": 118.77
// 	},
// 	{
// 		"key": new Date("2007-05-31T06:00:00.000Z"),
// 		"value": 121.19
// 	},
// 	{
// 		"key": new Date("2007-06-01T06:00:00.000Z"),
// 		"value": 118.4
// 	},
// 	{
// 		"key": new Date("2007-06-04T06:00:00.000Z"),
// 		"value": 121.33
// 	},
// 	{
// 		"key": new Date("2007-06-05T06:00:00.000Z"),
// 		"value": 122.67
// 	},
// 	{
// 		"key": new Date("2007-06-06T06:00:00.000Z"),
// 		"value": 123.64
// 	},
// 	{
// 		"key": new Date("2007-06-07T06:00:00.000Z"),
// 		"value": 124.07
// 	},
// 	{
// 		"key": new Date("2007-06-08T06:00:00.000Z"),
// 		"value": 124.49
// 	},
// 	{
// 		"key": new Date("2007-06-11T06:00:00.000Z"),
// 		"value": 120.19
// 	},
// 	{
// 		"key": new Date("2007-06-12T06:00:00.000Z"),
// 		"value": 120.38
// 	},
// 	{
// 		"key": new Date("2007-06-13T06:00:00.000Z"),
// 		"value": 117.5
// 	},
// 	{
// 		"key": new Date("2007-06-14T06:00:00.000Z"),
// 		"value": 118.75
// 	},
// 	{
// 		"key": new Date("2007-06-15T06:00:00.000Z"),
// 		"value": 120.5
// 	},
// 	{
// 		"key": new Date("2007-06-18T06:00:00.000Z"),
// 		"value": 125.09
// 	},
// 	{
// 		"key": new Date("2007-06-19T06:00:00.000Z"),
// 		"value": 123.66
// 	},
// 	{
// 		"key": new Date("2007-06-20T06:00:00.000Z"),
// 		"value": 121.55
// 	},
// 	{
// 		"key": new Date("2007-06-21T06:00:00.000Z"),
// 		"value": 123.9
// 	},
// 	{
// 		"key": new Date("2007-06-22T06:00:00.000Z"),
// 		"value": 123
// 	},
// 	{
// 		"key": new Date("2007-06-25T06:00:00.000Z"),
// 		"value": 122.34
// 	},
// 	{
// 		"key": new Date("2007-06-26T06:00:00.000Z"),
// 		"value": 119.65
// 	},
// 	{
// 		"key": new Date("2007-06-27T06:00:00.000Z"),
// 		"value": 121.89
// 	}
// ]
