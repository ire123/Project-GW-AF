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
    .duration(1000)
    .style("opacity", 0)
      .transition()
      .duration(4000)
      .style("font-size","28px")
      .style('fill', '#47d2b8')
      .style("font-weight",'bold')
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
    .duration(1800)
    .style("font-size","28px")
    .style('fill', '#47d2b8')
    .style("font-weight",'bold')
    .style("opacity", 0);
    // .transition()
    // .duration(4000)
    // .style("opacity", 1);
  
  repeat();

  function repeat(){
    chart.select(".sel-1")
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'red')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'green')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-2")
      .transition()
      .delay(1000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'purple')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'royalblue')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again
    
    chart.select(".sel-3")
      .transition()
      .delay(2000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'darkgoldenrod')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'black')
      .style("font-weight",'bold')
      .transition()
      .duration(54000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-4")
      .transition()
      .delay(3000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'green')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'darkturquoise')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-5")
      .transition()
      .delay(4000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'black')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'deeppink')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-6")
      .transition()
      .delay(5000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'darkturquoise')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'orchid')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-7")
      .transition()
      .delay(5000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'darkturquoise')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'orchid')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-8")
      .transition()
      .delay(6000) 
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'red')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'green')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-9")
      .transition()
      .delay(7000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'darkorange')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'purple')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-10")
      .transition()
      .delay(8000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'darkviolet')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'deepskyblue')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-11")
      .transition()
      .delay(9000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'purple')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'darkgoldenrod')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-12")
      .transition()
      .delay(10000) 
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'green')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'red')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again

    chart.select(".sel-13")
      .transition()
      .delay(10000)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'green')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .transition()
      .duration(1800)
      .style("opacity", 0)
      .style("font-size","28px")
      .style('fill', 'red')
      .style("font-weight",'bold')
      .transition()
      .duration(4000)
      .style("opacity", 1)
      .on("end", repeat);  // when the transition finishes start again
  }
  });       
}  // function textDisplay

// Call the function
textDisplay();