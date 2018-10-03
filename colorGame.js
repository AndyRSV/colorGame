var colors = generateRandomColors(6);

var squares = document.querySelectorAll("div.square");
var pickedColor = pickedColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1  = document.querySelector("h1");
colorDisplay.textContent = pickedColor ;

for(var i = 0; i<squares.length; i++){
  //add initial color to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
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

function pickedColor(){
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