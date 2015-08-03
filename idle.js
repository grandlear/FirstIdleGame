(function () {
    'use strict';
    var dom = {};
    var score = 0;
    var btnIncrement = 1;
    var btnTotalClicks = 0;
    
    
    function Shop(price, value, multiplier, isBought) {
        var self = this
        this.price = price;
        this.value = value;
        this.multiplier = multiplier;
        this.isBought = isBought;
        
        this.calculateEarnings = function(){
            addToScore(self.value);
        }
        
        this.onClicked = function(){
            if (score >= self.price) {
                score = score - self.price;
                var newValue = self.value;
                newValue = self.multiplier * self.value;
                self.value = newValue;
                self.price = (self.price * 2) * self.multiplier;
                self.isBought = true;
                setInterval(self.calculateEarnings, 50);
            }
        }
    }
    
    var coffeeShop = new Shop(10, 1, 2, false);
    
    var cardShop = new Shop(100, 10, 4,false);
    
    var bowlingAlley = new Shop(1000, 250, 8, false);
    
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
        dom.score.innerHTML = score;
        dom.coffeeShopValue.innerHTML = coffeeShop.value;
        dom.coffeeShopNextUpgrade.innerHTML = coffeeShop.price;
        dom.cardShopValue.innerHTML = cardShop.value;
        dom.cardShopNextUpgrade.innerHTML = cardShop.price;
        dom.bowlingAlleyValue.innerHTML = bowlingAlley.value;
        dom.bowlingAlleyNextUpgrade.innerHTML = bowlingAlley.price;
    }
    
    function increaseEarnings (val) {
        addToScore(val);
    }
    
    function cacheDom(){
        dom.score = document.getElementById('score');
        dom.coffeeShopValue = document.getElementById('coffee-shop-value');
        dom.coffeeShopNextUpgrade = document.getElementById('coffee-shop-next-upgrade');
        dom.cardShopValue = document.getElementById('card-shop-value');
        dom.cardShopNextUpgrade = document.getElementById('card-shop-next-upgrade');
        dom.bowlingAlleyValue = document.getElementById('bowling-alley-value');
        dom.bowlingAlleyNextUpgrade = document.getElementById('bowling-alley-next-upgrade');
        
        dom.manualEarn = document.getElementById('manual-earn');
        dom.coffeeShop = document.getElementById('coffee-shop');
        dom.cardShop = document.getElementById('card-shop');
        dom.bowlingAlley = document.getElementById('bowling-alley');
    }
    
    function attachEventHandlers(){
        dom.manualEarn.onclick = onManualEarnClicked;
        dom.coffeeShop.onclick = coffeeShop.onClicked;
        dom.cardShop.onclick = cardShop.onClicked;
        dom.bowlingAlley.onclick = bowlingAlley.onClicked;
    }
    
    function setup(){
        cacheDom();
        attachEventHandlers();
        refreshData();
    }
    
    setup();
    
    
})();
