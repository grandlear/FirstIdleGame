var score = 0;
var btnIncrement = 1;
var btnTotalClicks = 0;

var coffeeShopPrice = 10;
var coffeeShopValue = 1;
var coffeeShopMP = 2;
var isCoffeeShopBought = false;

var cardShopPrice = 100;
var cardShopValue = 10;
var cardShopMP = 4;
var isCardShopBought = false;

var bowlingAlleyPrice = 1000;
var bowlingAlleyValue = 250;
var bowlingAlleyMP = 8;
var bowlingAlleyBought = false;

function btnClick () {
  btnTotalClicks++;
  addToScore(btnIncrement);
  if (btnTotalClicks % 10 == 0) btnIncrement = btnIncrement * 2;
}

function addToScore (val) {
  score = score + val;
  refreshData();
}

function refreshData() {
  document.getElementById('score').innerHTML = score;
  document.getElementById('coffeeShopValue').innerHTML = coffeeShopValue;
  document.getElementById('coffeeShopNextUpgrade').innerHTML = coffeeShopPrice;
  document.getElementById('cardShopValue').innerHTML = cardShopValue;
  document.getElementById('cardShopNextUpgrade').innerHTML = cardShopPrice;
  document.getElementById('bowlingAlleyValue').innerHTML = bowlingAlleyValue;
  document.getElementById('bowlingAlleyNextUpgrade').innerHTML = bowlingAlleyPrice;
}

function increaseEarnings (val) {
  addToScore(val);
}

function coffeeShop () {
var newValue = coffeeShopValue;
  if (score >= coffeeShopPrice) {
    score = score - coffeeShopPrice;
    newValue = coffeeShopMP * coffeeShopValue;
    coffeeShopValue = newValue;
    coffeeShopPrice = (coffeeShopPrice * 2) * coffeeShopMP;
    iscoffeeShopBought = true;
  }

  if (iscoffeeShopBought = true) {
    addToScore(newValue);
  }
}

function cardShop () {
var newValue = cardShopValue;
  if (score >= cardShopPrice) {
    score = score - cardShopPrice;
    newValue = cardShopMP * cardShopValue;
    cardShopValue = newValue;
    cardShopPrice = (cardShopPrice * 2) * cardShopMP;
    iscardShopBought = true;
  }

  if (iscardShopBought = true) {
    addToScore(newValue);
  }
}


function bowlingAlley () {
var newValue = bowlingAlleyValue;
  if (score >= bowlingAlleyPrice) {
    score = score - bowlingAlleyPrice;
    newValue = bowlingAlleyMP * bowlingAlleyValue;
    bowlingAlleyValue = newValue;
    bowlingAlleyPrice = (bowlingAlleyPrice * 2) * bowlingAlleyMP;
    bowlingAlleyBought = true;
  }

  if (bowlingAlleyBought = true) {
    addToScore(newValue);
  }
}



refreshData();
