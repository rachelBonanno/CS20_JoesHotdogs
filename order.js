Number.prototype.toFixed = function() {
    let x = Number(this);
    let round = Math.round(x * 100)/100;
    if (round % 1 == 0) {
        return round + ".00";
    }
    if ((round * 10) % 1 == 0) {
        return round + "0";
    }
    return round;
}

function amount() {
    var hotdogprice = 4.25;
    var friesprice = 2.60;
    var drinksprice = 1.50;
    var hotdog = prompt("How many hotdogs would you like?");
    var fries = prompt("How many fries would you like?");
    var drinks = prompt("How many drinks would you like?");
    var hp;
    var fp;
    var dp;
    if (hotdog == null || hotdog == "") {
        hp = 0;
        document.getElementById("hotdogsprice").innerHTML = 0 + " Hotdogs: $" + 0;
    } else {
        hp = hotdog * hotdogprice;
        document.getElementById("hotdogsprice").innerHTML = hotdog + " Hotdogs: $" + hp.toFixed();
    }
    if (fries == null || fries == "") {
        fp = 0;
        document.getElementById("friesprice").innerHTML = 0 + " Fries: $" + 0;
    } else {
        fp = fries * friesprice;
        document.getElementById("friesprice").innerHTML = fries + " Fries: $" + fp.toFixed();
    }
    if (drinks == null || drinks == "") {
        dp = 0;
        document.getElementById("drinksprice").innerHTML = 0 + " Drinks: $" + 0;
    } else {
        dp = drinks * drinksprice;
        document.getElementById("drinksprice").innerHTML = drinks + " Drinks: $" + dp.toFixed();
    }
    var total = (hp + fp + dp);
    var tax;
    var grand;
    if (total >= 20) {
        var discount = total * 0.9;
        document.getElementById("text").innerHTML = "Total (With 10% discount): $" + discount.toFixed();
        tax = discount * 0.0625;
        document.getElementById("tax").innerHTML = "6.25% Tax: $" + tax.toFixed();
        grand = discount + tax;
        document.getElementById("total").innerHTML = "Total + Tax: $" + grand.toFixed();
    } else {
        document.getElementById("text").innerHTML = "Total: $" + total.toFixed();
        tax = total * 0.0625;
        document.getElementById("tax").innerHTML = "6.25% Tax: $" + tax.toFixed();
        grand = total + tax;
        document.getElementById("total").innerHTML = "Total + Tax: $" + grand.toFixed();
    }
}











