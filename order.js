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
        document.getElementById("hotdogsprice").innerHTML = hotdog + " Hotdogs: $" + hp.toFixed(2);
    }
    if (fries == null || fries == "") {
        fp = 0;
        document.getElementById("friesprice").innerHTML = 0 + " Fries: $" + 0;
    } else {
        fp = fries * friesprice;
        document.getElementById("friesprice").innerHTML = fries + " Fries: $" + fp.toFixed(2);
    }
    if (drinks == null || drinks == "") {
        dp = 0;
        document.getElementById("drinksprice").innerHTML = 0 + " Drinks: $" + 0;
    } else {
        dp = drinks * drinksprice;
        document.getElementById("drinksprice").innerHTML = drinks + " Drinks: $" + dp.toFixed(2);
    }
    var total = (hp + fp + dp);
    var tax;
    var grand;
    if (total >= 20) {
        var discount = total * 0.9;
        document.getElementById("text").innerHTML = "Total (With 10% discount): $" + discount.toFixed(2);
        tax = discount * 0.0625;
        document.getElementById("tax").innerHTML = "6.25% Tax: $" + tax.toFixed(2);
        grand = discount + tax;
        document.getElementById("total").innerHTML = "Total + Tax: $" + grand.toFixed(2);
    } else {
        document.getElementById("text").innerHTML = "Total: $" + total.toFixed(2);
        tax = total * 0.0625;
        document.getElementById("tax").innerHTML = "6.25% Tax: $" + tax.toFixed(2);
        grand = total + tax;
        document.getElementById("total").innerHTML = "Total + Tax: $" + grand.toFixed(2);
    }
}











