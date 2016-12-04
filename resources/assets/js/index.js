
var CalculaArea= function () {
    console.log('Aqui calculo area');
};


var Figure= function () {


};

Figure.prototype.area= CalculaArea();


var figura = new figure();

console.log(figura.area);