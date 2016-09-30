//console.log('hello world at external file');


//namespaces de moment no tenim classe

//var myApp;
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


