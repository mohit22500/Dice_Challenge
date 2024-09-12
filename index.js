var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceImage);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML = "Player 2 wins!"
}
else{
    document.querySelector(".container h1").innerHTML = "Draw!"
}