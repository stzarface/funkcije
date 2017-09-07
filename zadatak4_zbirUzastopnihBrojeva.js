
function zbir(min, max) {
    return ((max-min)+1) * (min + max) / 2;
}

var konacno = zbir(-3, 3);
var text = "Zbir celih brojeva u zadatom opsegu je " + konacno;
console.log(text);
