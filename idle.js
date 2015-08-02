(function () {
    'use strict';
    var score = 0;
    var btnIncrement = 1;
    var btnTotalClicks = 0;
    
    var coffeeShop = {
        price : 10,
        value : 1,
        multiplier : 2,
        isBought : false
    };
    
    var cardShop = {
        price : 100,
        value : 10,
        multiplier : 4,
        isBought : false
    };
    
    var bowlingAlley = {
        price : 1000,
        value : 250,
        multiplier : 8,
        isBought : false
    }
    
    function btnClick () {
        btnTotalClicks++;
        addToScore(btnIncrement);
        if (btnTotalClicks % 10 === 0) btnIncrement = btnIncrement * 2;
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
        document.getElementById('coffee-shop-value').innerHTML = coffeeShop.value;
        document.getElementById('coffee-shop-next-upgrade').innerHTML = coffeeShop.price;
        document.getElementById('card-shop-value').innerHTML = cardShop.value;
        document.getElementById('card-shop-next-upgrade').innerHTML = cardShop.price;
        document.getElementById('bowling-alley-value').innerHTML = bowlingAlley.value;
        document.getElementById('bowling-alley-next-upgrade').innerHTML = bowlingAlley.price;
    }
    
    function increaseEarnings (val) {
        addToScore(val);
    }
    
    function calculateCoffeeShopEarnings () {
        addToScore(coffeeShop.value);
    }
    
    function onCoffeeShopClicked() {
        if (score >= coffeeShop.price) {
            score = score - coffeeShop.price;
            var newValue = coffeeShop.value;
            newValue = coffeeShop.multiplier * coffeeShop.value;
            coffeeShop.value = newValue;
            coffeeShop.price = (coffeeShop.price * 2) * coffeeShop.multiplier;
            coffeeShop.isBought = true;
            setInterval(calculateCoffeeShopEarnings, 50);
        }
        
    }
    
    function calculateCardShopEarnings () {
        addToScore(cardShop.value);
    }
    
    function onCardShopClicked() {
        if (score >= cardShop.price) {
            score = score - cardShop.price;
            var newValue = cardShop.value;
            newValue = cardShop.multiplier * cardShop.value;
            cardShop.value = newValue;
            cardShop.price = (cardShop.price * 2) * cardShop.multiplier;
            cardShop.isBought = true;
            setInterval(calculateCardShopEarnings, 50);
        }
    }
    
    
    function calculateBowlingAlleyEarnings () {
        addToScore(bowlingAlley.value);
    }
    
    function onBowlingAlleyClicked() {
        if (score >= bowlingAlley.price) {
            score = score - bowlingAlley.price;
            var newValue = bowlingAlley.value;
            newValue = bowlingAlley.multiplier * bowlingAlley.value;
            bowlingAlley.value = newValue;
            bowlingAlley.price = (bowlingAlley.price * 2) * bowlingAlley.multiplier;
            bowlingAlley.isBought = true;
            setInterval(calculateBowlingAlleyEarnings, 50);
        }
    }
    
    refreshData();
    
    document.getElementById('manual-earn').onclick = onManualEarnClicked;
    document.getElementById('coffee-shop').onclick = onCoffeeShopClicked;
    document.getElementById('card-shop').onclick = onCardShopClicked;
    document.getElementById('bowling-alley').onclick = onBowlingAlleyClicked;
})();
