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

function onManualEarnClicked() {
    btnClick();
}

function addToScore (val) {
    score = score + val;
    refreshData();
}

function refreshData() {
    document.getElementById('score').innerHTML = score;
    document.getElementById('coffee-shop-value').innerHTML = coffeeShopValue;
    document.getElementById('coffee-shop-next-upgrade').innerHTML = coffeeShopPrice;
    document.getElementById('card-shop-value').innerHTML = cardShopValue;
    document.getElementById('card-shop-next-upgrade').innerHTML = cardShopPrice;
    document.getElementById('bowling-alley-value').innerHTML = bowlingAlleyValue;
    document.getElementById('bowling-alley-next-upgrade').innerHTML = bowlingAlleyPrice;
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

function onCoffeeShopClicked() {
    setInterval(coffeeShop, 50);
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

function onCardShopClicked() {
    setInterval(cardShop, 50)
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

function onBowlingAlleyClicked() {
    setInterval(bowlingAlley, 50);
}

refreshData();

document.getElementById('manual-earn').onclick = onManualEarnClicked;
document.getElementById('coffee-shop').onclick = onCoffeeShopClicked;
document.getElementById('card-shop').onclick = onCardShopClicked;
document.getElementById('bowling-alley').onclick = onBowlingAlleyClicked;