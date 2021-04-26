//For HTML headers at the index to be non-transparent when scrolled

window.onscroll = function() {scrollFunction()}
window.onresize = function() {scrollFunction()} // Recolor #header if width is < 600; This is for the dropdown list
window.onload = function() {webDevelopment()}

function scrollFunction(){
	if(window.innerWidth > 600){
	  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.7)";
	    document.getElementById("header").style.transition = "all 1.5s ease-in-out";
	  } else {
	    document.getElementById("header").style.backgroundColor = "transparent";
	    document.getElementById("header").style.transition = "all 1.5s ease-in-out";
	  }
	} else {
		document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.8)";
		document.getElementById("header").style.transition = "all 1.25s ease-in-out";
	}
}

function myFunction() {
  var x = document.getElementById("mainnav");
  if (x.className === "mainnav") {
    x.className += " responsive";
  } else {
    x.className = "mainnav";
  }
}

function webDevelopment() {
		var cvs = document.getElementsByClassName("webSkill");
		var wsctx = cvs[0].getContext("2d");
		var wsctx2 = cvs[1].getContext("2d");
		var color = "198,157,83";
		var lightcolor = "210,179,121";
		var data = [
		{
			value: 38,
			color: "rgb("+color+")",
			highlight: "rgb("+lightcolor+")",
			label: "HTML"
		},
		{
			value: 42,
			color: "rgba("+color+", .8)",
			highlight: "rgba("+lightcolor+", .8)",
			label: "CSS"
		},
		{
			value: 20,
			color: "rgba("+color+", .6)",
			highlight: "rgba("+lightcolor+", .6)",
			label: "JavaScript"
		},
		]
		var chart = new Chart(wsctx).Doughnut(data);
		var chart = new Chart(wsctx2).Doughnut(data);
}