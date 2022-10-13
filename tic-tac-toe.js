window.onload = init;
var gamePlay = new Array();

function init() {
	var button = document.getElementsByClassName("btn")[0].setAttribute("onclick", "createBoard()")
}

function markSquare(val) {
	if (gamePlay.length == 0) {
		gamePlay.push("X")
		// val.setAttribute("class", "square X")
		val.classList.add("square", "X")
		val.textContent = "X"
	} else if (gamePlay[gamePlay.length - 1] == "O") {
		gamePlay.push("X")
		val.setAttribute("class", "square X")
		val.textContent = "X"
	} else {
		gamePlay.push("O")
		val.setAttribute("class", "square O")
		val.textContent = "O"
	}
}

function mouseOver(val){
	val.classList.add("hover")
}

function mouseOut(val){
	val.classList.remove("hover")
}



function createBoard() {
	var children = document.getElementById("board").childNodes 

	for (var i=0; i < children.length; i++) {
	  if (children[i].nodeName == "DIV") {
	    children[i].setAttribute("class", "square")
	    children[i].setAttribute("onclick", "markSquare(this)")
	    children[i].setAttribute("onmouseover", "mouseOver(this)")
	    children[i].setAttribute("onmouseout", "mouseOut(this)")
	  }
	} 
}


