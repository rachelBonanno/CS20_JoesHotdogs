function amount() {
    var hotdogprice = 4.25;
    var friesprice = 2.60;
    var drinksprice = 1.50;
    var hotdog = prompt("How many hotdogs would you like?");
    var fries = prompt("How many fries would you like?");
    var drinks = prompt("How many drinks would you like?");
    if (hotdog == null || hotdog == "") {
        document.getElementById("hotdogsprice").innerHTML = 0 + " Hotdogs: $" + 0;
    } else {
        document.getElementById("hotdogsprice").innerHTML = hotdog + " Hotdogs: $" + (hotdog * hotdogprice);
    }
    if (fries == null || fries == "") {
        document.getElementById("friesprice").innerHTML = 0 + " Fries: $" + 0;
    } else {
        document.getElementById("friesprice").innerHTML = fries + " Fries: $" + (fries * friesprice);
    }
    if (drinks == null || drinks == "") {
        document.getElementById("drinksprice").innerHTML = 0 + " Drinks: $" + 0;
    } else {
        document.getElementById("drinksprice").innerHTML = drinks + " Drinks: $" + (drinks * drinksprice);
    }
    var total = (hotdogprice + friesprice + drinksprice);
    if (total >= 20) {
        document.getElementById("text").innerHTML = "Total (With 10% discount): $" + (total * 0.1);
    } else {

    }
    document.getElementById("text").innerHTML = "Total: $" + total;
}











