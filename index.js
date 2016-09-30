//console.log('hello world at external file');


//namespaces de moment no tenim classe

//json
var Person = {
    'name': 'Marc',
    'sn': 'Calafell',
    'age': '21'
};
Person.hello=function hello() {
    console.log('hello ' + Person.name + Person.sn);
}
Person.sn= ' Calafell Gisbert';
Person.hello();

//oln
var Person2 = {
    name: 'Marc',
    sn: 'Calafell',
    age: '21',
    constructor: function () {  },

    hello2: function () { return 'hello ' + this.name + this.sn;  },

    bye: function () { return 'bye ' + this.name + this.sn; }
}

console.log(Person2.name);
console.log(Person2.bye());
