var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll("div.square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1  = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();


function init(){
  //allow to add mulitple buttons in the future and not duplicate code
  //mode buttons eventlisteners
  setupModeButtons();
  //adding event listeners to squares
  setupSquares();
  reset();

}


function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}


function setupSquares(){
  for(var i = 0; i<squares.length; i++){  
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
        
      }
    });
  };
}



function reset(){
   //generate random colors
   colors = generateRandomColors(numSquares);
   //pick new random color from array
   pickedColor = pickColor();
   //change color display to match picked color
   colorDisplay.textContent = pickedColor;
   resetButton.textContent = "New Colors"
   messageDisplay.textContent = "";
   //change colors of squares
   for(var i = 0; i<squares.length;i++){
     if(colors[i]){
       squares[i].style.display = "block";
       squares[i].style.backgroundColor = colors[i];
     }else{
       squares[i].style.display = "none";
     }
     
   }
   
   h1.style.background = "steelblue";
 

}

colorDisplay.textContent = pickedColor ;



resetButton.addEventListener("click",function(){
  reset();
  
})







function changeColors(color) {
  //loop through all squares
  for (var i=0; i<squares.length; i++){
    //change each color to match picked color
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num){
  //declare an array
  var arr = [];
  //repeat num times
  for (var i = 0; i<num; i++){
    //get random color and push to array
    arr.push(randomColor());
  }
  
  return arr;
}

function randomColor(){
  //pick a red, green, blue from 0-255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
















//-----------------------------------------------------------//

// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;

//   for (var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else{
//       squares[i].style.display = "none";
//     }
//   }
// })


// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;

//   for (var i = 0; i < squares.length; i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";

//   }

// })
