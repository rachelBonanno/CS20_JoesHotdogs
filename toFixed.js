Number.prototype.toFixed = function() {
    var x = Number(this);
    let round = Math.round((x * 100)/100);
    if (round % 1 == 0) {
        return round + ".00"
    }
}