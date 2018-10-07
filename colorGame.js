var numSquares = 6;
var colors = generateRandomColors(numSquares);


var squares = document.querySelectorAll("div.square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1  = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor ;

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else{
      squares[i].style.display = "none";
    }
  }
})


hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    
  }

})


resetButton.addEventListener("click",function(){
  //generate random colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors"
  //change colors of squares
  for(var i = 0; i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    
  }
  
  messageDisplay.textContent = "";
  h1.style.background = "steelblue";


})




for(var i = 0; i<squares.length; i++){
  //add initial color to squares
  squares[i].style.backgroundColor = colors[i];

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