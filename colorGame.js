var numSquares = 6;
var colors =[];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}
function setupModeButtons(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent ==="Easy" ? numSquares=3 : numSquares=6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i=0;i<squares.length;i++){
        //add event listener
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor){
                messageDisplay.textContent = "Correct";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent="Play Again ?"
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a color of the 6
    pickedColor = pickColor();
    //change colorDisplay textContent
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //changeColors
    messageDisplay.textContent="";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display="block"; 
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click",function(){
    reset();
});



function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*numSquares);
    return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for(var i=0;i<num;i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    let color = "rgb("+red+", "+green+", "+blue+")";
    return color;
}