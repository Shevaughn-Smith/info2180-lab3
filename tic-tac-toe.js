window.onload = init;

function init() {
	var button = document.getElementsByClassName("btn")[0].setAttribute("onclick", "createBoard()")
}



function createBoard() {
	var children = document.getElementById("board").childNodes 

	for (var i=0; i < children.length; i++) {
	  if (children[i].nodeName == "DIV") {
	    children[i].setAttribute("class", "square") 
	  }
	} 
}