//console.log('hello world at external file');


//namespaces de moment no tenim classe
var person= {
    firstName: 'asd',
    lastName: 'qwerty',
    showFullName:function () {
        console.log(this.firstName + ' ' + this.lastName)
    }

}

person.showFullName();


