//console.log('hello world at external file');


//window.alert(window.$name);
//console.log(window);/*mostra funcions predefinides */
//scope d'una variable. funcions
//l'scope o ambit es la zona del codi on una variable te sentit
//variables locals --> nomes tenen vida en una funcio o en un fragment de codi
//variables globals ->> cal evitar-les especialment en js

function hola() {
    $nom="marc";
    console.log('hello ' + $nom);

}

hola();

/*
* hoyster podem utilitzar una funció abans de declarar-la
* perque js abans de executar res busca les funcions
 *
  *
  * */