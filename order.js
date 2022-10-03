function amount() {
    let text;
    var hotdog = prompt("How many hotdogs would you like?");
    if (hotdog == null || hotdog == "") {
        text = "Use cancelled the prompt.";
    } else {
        text = amount + "hotdogs";
    }
}

