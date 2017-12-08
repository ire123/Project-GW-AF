// set the D3 work area
var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 70, left: 100 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold the chart  
// area, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var chart = svg.append("g");


// Put the text on the screen for the first time
d3.csv("gwData1.csv", function(err, gwData1) {
  if (err) throw err;

  gwData1.forEach(function(data) {
    data.yVal = +data.y;
    data.xVal = +data.x;
    data.Sentence = data.sentence;
    // console.log("yVal ",data.yVal);
    // console.log("xVal ",data.xVal);
  });

  chart.selectAll("text")
    .data(gwData1)
    .enter()
    .append("text")
    .attr("transform", function(data, index){return "translate(" + (0 - data.yVal) + " ," + data.xVal + ")"})
    .attr("text-anchor", "start")
    .attr("class", function(data, index){return "textItem sel-" + index}) 
    .text(function(data, index){return data.Sentence})
    .style("opacity", 0)
    .transition()
    .duration(3000)
    ;

  chart.selectAll(".textItem")
    .transition()
    .delay(4000)
    .style("opacity", 0)
      .transition()
      .duration(4000)
      .style("opacity", 1);
});  

function textDisplay(){
  // begin the D3 magic
  d3.csv("gwData1.csv", function(err, gwData1) {
    if (err) throw err;

    gwData1.forEach(function(data) {
      data.yVal = +data.y;
      data.xVal = +data.x;
      data.Sentence = data.sentence;
      // console.log("yVal ",data.yVal);
      // console.log("xVal ",data.xVal);
    });
  

  // Add text to the chart area
  chart.selectAll("text")
    .data(gwData1)
    .enter()
    .append("text")
    .attr("transform", function(data, index){return "translate(" + (0 - data.yVal) + " ," + data.xVal + ")"})
    .attr("text-anchor", "start")
    .attr("class", function(data, index){return "textItem sel-" + index}) 
    .text(function(data, index){return data.Sentence})
    .transition()
    .delay(5000)
    .style("opacity", 0)
    .style("font-size","28px")
    .style('fill', '#47d2b8')
    .style("font-weight",'bold')
    .transition()
    .duration(5000)
    .style("opacity", 1);
  
  // confirm execution
  console.log("in textDisplay")
 
  repeat();

  function repeat(){
    chart.selectAll(".textItem")
      .transition()
      .duration(3000)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'royalblue')
      .style("font-weight",'bold')
      .transition()
      .duration(5000)
      .style("opacity", 1)
      .transition()
      .duration(3000)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'black')
      .style("font-weight",'bold')
      .transition()
      .duration(5000)
      .style("opacity", 1)
      .transition()
      .duration(3000)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'red')
      .style("font-weight",'bold')
      .transition()
      .duration(5000)
      .style("opacity", 1)
      .transition()
      .duration(3000)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'green')
      .style("font-weight",'bold')
      .transition()
      .duration(5000)
      .style("opacity", 1)
      .transition()
      .duration(3000)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'magenta')
      .style("font-weight",'bold')
      .transition()
      .duration(5000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again
    // confirm execution
    console.log("in repeat")  
  }
  });       
}  // function textDisplay

// Call the function
textDisplay();