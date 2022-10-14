window.onload = createBoard;
var gamePlay = new Array();
var prevIndex;


function getDivs() {
	var children = document.getElementById("board").childNodes
	var childList = new Array();

	for (var i=0; i < children.length; i++) {
	  if (children[i].nodeName == "DIV") {
	  	childList.push(children[i])
	  }
	}

	return childList

}


function winner(player) {
	var status = document.getElementById("status")
	var childList = new Array();
	childList = getDivs();

	for (var i=0; i < childList.length; i++) {
	    childList[i].removeAttribute("onclick", "checkCell(this)")
	    childList[i].removeAttribute("onmouseover", "mouseOver(this)")
	    childList[i].removeAttribute("onmouseout", "mouseOut(this)")
	} 

	status.textContent = "Congratulations! " + player + " is the Winner!"
	status.classList.add("you-won")
}


function checkWinner(){
	if (gamePlay[0] == "X" && (
		(gamePlay[1] == "X" && gamePlay[2] == "X") || 
		(gamePlay[3] == "X" && gamePlay[6] == "X") || 
		(gamePlay[4] == "X" && gamePlay[8] == "X"))) {
		winner("X")
	} else if (gamePlay[0] == "O" && (
		(gamePlay[1] == "O" && gamePlay[2] == "O") || 
		(gamePlay[3] == "O" && gamePlay[6] == "O") || 
		(gamePlay[4] == "O" && gamePlay[8] == "O"))) {
		winner("O")
	} else if (gamePlay[1] == "X" && gamePlay[4] == "X" && gamePlay[7] == "X") {
		winner("X")
	} else if (gamePlay[1] == "O" && gamePlay[4] == "O" && gamePlay[7] == "O") {
		winner("O")
	} else if (gamePlay[2] == "X" && gamePlay[5] == "X" && gamePlay[8] == "X") {
		winner("X")
	} else if (gamePlay[2] == "O" && gamePlay[5] == "O" && gamePlay[8] == "O") {
		winner("O")
	} else if (gamePlay[3] == "X" && gamePlay[4] == "X" && gamePlay[5] == "X") {
		winner("X")
	} else if (gamePlay[3] == "O" && gamePlay[4] == "O" && gamePlay[5] == "O") {
		winner("O")
	} else if (gamePlay[6] == "X" && gamePlay[7] == "X" && gamePlay[8] == "X") {
		winner("X")
	} else if (gamePlay[6] == "O" && gamePlay[7] == "O" && gamePlay[8] == "O") {
		winner("O")
	} else if (gamePlay[2] == "X" && gamePlay[4] == "X" && gamePlay[6] == "X") {
		winner("X")
	} else if (gamePlay[2] == "O" && gamePlay[4] == "O" && gamePlay[6] == "O") {
		winner("O")
	}
}


function mark(val, player) {
	gamePlay[val.id] = player
	val.setAttribute("class", "square " + player)
	val.textContent = player
	prevIndex = val.id
	checkWinner()
}


function markSquare(val) {
	if (gamePlay.length == 0) {
		mark(val, "X")

	} else if (gamePlay[prevIndex] == "O") {
		mark(val, "X")

	} else {
		mark(val, "O")
	}
}




function mouseOver(val){
	val.classList.add("hover")
}


function mouseOut(val){
	val.classList.remove("hover")
}


function checkCell(cell) {
	if (cell.textContent != "X" && cell.textContent != "O") {
		markSquare(cell)
	}
}


function createBoard() {
	var button = document.getElementsByClassName("btn")[0].setAttribute("onclick", "createBoard()")
	var status = document.getElementById("status")
	var childList = new Array();
	childList = getDivs();

	gamePlay = []
	status.textContent = "Move your mouse over a square and click to play an X or an O."
	status.classList.remove("you-won")

	for (var i=0; i < childList.length; i++) {
		childList[i].setAttribute("class", "square")
	    childList[i].setAttribute("onclick", "checkCell(this)")
	    childList[i].setAttribute("onmouseover", "mouseOver(this)")
	    childList[i].setAttribute("onmouseout", "mouseOut(this)")
	    childList[i].setAttribute("id", i)
	    childList[i].textContent = ""
	} 
}