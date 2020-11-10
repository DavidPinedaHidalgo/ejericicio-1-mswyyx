// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". NO HACE FALTA USAR FILTER. SE PUEDE RECORRER CON CUALQUIER BUCLE
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);
var arrayUsuarios;

function onLoad() {
  createUsers();

  console.log(arrayUsuarios);
  var us = filter();
  console.log(us);
  console.log();
}

function createUsers() {
  var usuario1 = {
    name: "usuario1",
    country: "spain",
    money: 199,
    premiumAccount: true
  };
  var usuario2 = {
    name: "usuario2",
    country: "france",
    money: 0,
    premiumAccount: false
  };
  var usuario3 = {
    name: "usuario3",
    country: "spain",
    money: 537,
    premiumAccount: false
  };
  var usuario4 = {
    name: "usuario4",
    country: "italy",
    money: 1004,
    premiumAccount: true
  };
  var usuario5 = {
    name: "usuario5",
    country: "spain",
    money: 250,
    premiumAccount: false
  };
  var usuario6 = {
    name: "usuario6",
    country: "ireland",
    money: 799,
    premiumAccount: true
  };
  var usuario7 = {
    name: "usuario7",
    country: "spain",
    money: 3345,
    premiumAccount: false
  };

  arrayUsuarios = [
    usuario1,
    usuario2,
    usuario3,
    usuario4,
    usuario5,
    usuario6,
    usuario7
  ];
}

function filter(usuarios) {
  var us = usuarios;
  var usuariosFiltrados = [];
  for (let i = 0; i < arrayUsuarios.l; i++) {
    if (usuarios[i].country == "spain" && usuarios[i].money >= 200) {
      usuariosFiltrados.push(usuarios[i]);
    }
  }
  return usuariosFiltrados;
}
