window.onload = init;
var gamePlay = new Array();
var prevIndex;

function init() {
	var button = document.getElementsByClassName("btn")[0].setAttribute("onclick", "createBoard()")
}

function markSquare(val) {
	if (gamePlay.length == 0) {
		gamePlay[val.id] = "X"
		val.setAttribute("class", "square X")
		val.textContent = "X"
		prevIndex = val.id
	} else if (gamePlay[prevIndex] == "O") {
		gamePlay[val.id] = "X"
		val.setAttribute("class", "square X")
		val.textContent = "X"
		checkWinner()
		prevIndex = val.id
	} else {
		gamePlay[val.id] = "O"
		val.setAttribute("class", "square O")
		val.textContent = "O"
		checkWinner()
		prevIndex = val.id
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
	var childList = new Array();


	for (var i=0; i < children.length; i++) {
	  if (children[i].nodeName == "DIV") {
	  	childList.push(children[i])
	  }
	}

	for (var i=0; i < childList.length; i++) {
		childList[i].setAttribute("class", "square")
	    childList[i].setAttribute("onclick", "markSquare(this)")
	    childList[i].setAttribute("onmouseover", "mouseOver(this)")
	    childList[i].setAttribute("onmouseout", "mouseOut(this)")
	    childList[i].setAttribute("id", i)
	} 
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

function winner(player) {
	var status = document.getElementById("status")
	status.textContent = "Congratulations! " + player + " is the Winner!"
	status.classList.add("you-won")
}