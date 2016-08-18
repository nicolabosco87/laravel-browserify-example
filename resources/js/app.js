var React = require('react');
var ReactDOM = require('react-dom');

//require('./Home');
//ReactDOM.render(<Home />, document.getElementById('reactApp'));


var Counter = require("./Counter").default;

//new Counter();

//var Counter = require("./Counter").default;
ReactDOM.render(<Counter />, document.getElementById('reactApp'));




//var $ = require("jquery");

//$(document).ready(function(){
//    $("body").append("<h1>MAMA</h1>");
//});