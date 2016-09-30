//console.log('hello world at external file');


//ecma script 6 --> novaa versio js
//let_
//const

//window.alert(window.$name);
//console.log(window);/*mostra funcions predefinides */
//scope d'una variable. funcions
//l'scope o ambit es la zona del codi on una variable te sentit
//variables locals --> nomes tenen vida en una funcio o en un fragment de codi
//variables globals ->> cal evitar-les especialment en js

function fire(bool) {

    if (bool) {
        var foo = "bar";
        console.log(foo);

    }else {
        console.log(foo);

    }



}

fire(false);

/*
* hoyster podem utilitzar una funció abans de declarar-la
* perque js abans de executar res busca les funcions
 *
  *
  * */