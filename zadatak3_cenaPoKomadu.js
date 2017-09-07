
var kupovina = function (novacNaRacunu, cenaPoKomadu) {
	return novacNaRacunu / cenaPoKomadu;
}

var komada = kupovina(100, 25);
var text = "Možete kupiti " + komada + " komada.";
console.log(text);

