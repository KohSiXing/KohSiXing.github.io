//For HTML headers at the index to be non-transparent when scrolled

window.onscroll = function() {scrollFuncion()}
window.onresize = function() {scrollFuncion()} // Recolor #header if width is < 600; This is for the dropdown list

function scrollFuncion(){
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