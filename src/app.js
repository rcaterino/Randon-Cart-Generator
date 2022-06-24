window.onload = () => {
  let suit = getRandomSuit();
  let cambio = document.getElementById("card");
  cambio.style.color = getRandomColor();
  document.querySelector(".number").innerHTML = getRandomNum();
  document.querySelector(".top").innerHTML = suit;
  document.querySelector(".botton").innerHTML = suit;
};

let getRandomNum = () => {
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  let randomNum = Math.floor(Math.random() * num.length);
  return num[randomNum];
};

let getRandomSuit = () => {
  let suit = ["&spades;", "&clubs;", "&diams;", "&hearts;"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};

let getRandomColor = () => {
  let color = ["#ff0000", "#000000"];
  let randomColor = Math.floor(Math.random() * color.length);
  return color[randomColor];
};
