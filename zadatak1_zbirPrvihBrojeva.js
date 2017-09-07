var zbir = function(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}

var konacno = zbir(99);
var text = "Zbir prvih brojeva je "+ konacno;
console.log(text);