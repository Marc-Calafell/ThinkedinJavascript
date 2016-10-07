function Persona() {
    console.log('Creant persona');
}


$pers = new Persona();

var Persona2= function (name) {
    this.name= name;
    console.log('Creant persona2');
};
Persona2.prototype.SayHellp= function (name) {
    this.name= name;
    console.log('Hola ' + name);
};



$pers1 = new Persona2();
$pers2 = new Persona2();
$pers3 = new Persona2();