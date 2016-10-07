//console.log('hello world at external file');

var showFullName  = function () {
    console.log(this.firstName + ' ' + this.lastName + '' + arguments[0]);


}
//namespaces de moment no tenim classe

var name = 'Marc';

var person= {
    firstName: 'Marc',
    lastName: 'Calafell Gisbert',
    showFullName:function () {
        console.log(this.firstName + ' ' + this.lastName)
    }

}

person.showFullName();

var copia = showFullName.bind(person);

showFullName();