var nFaktor = function(N) {
  var total = 1;
    for(var i = 1; i <= N; i++){
      total *= i;
    }
    return total;
}

var konacno = nFaktor(5);
var text = "Faktorijel je " + konacno;
console.log(text);
