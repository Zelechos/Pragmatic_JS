'use strict'

//Cadena creada de Forma Primitiva
const texto1 = "Esto es una cadena de Texto Primitiva";
console.log(texto1);

//Cadena creada como un Objeto
const texto = new String("Esto es un Objeto String");
console.log(texto);
console.log(texto[11]);

//Aqui mostramos el objeto estring mediante un bucle for
for (let x=0; x < texto.length; x++){
    console.log(texto[x]);
}

console.log("Cadena convertida todas las letras en mayusculas con el Metodo toUpperCase()");
console.log(texto1.toUpperCase());

console.log("Cadena convertida todas las letras en minusculas con el Metodo toLowerCase()");
console.log(texto1.toLowerCase());

//includes sirve para ver si existe dicha palabra que buscamos en el string
let Frase = "Nuestros Impulsos , crean Energia y la Energia Afecta la Realidad";
console.log(Frase.includes("Impulsos"));


//trim() es para quitar los espacios en blanco que tiene en los extremos el string
let poema = "    el final           ";
console.log(poema.trim());

//split() para converitr una cadena en una array en js
let DARK = "El principio es el Fin y el Fin es el Principio";

//mete el string completo al array en una sola posicion
console.log(DARK.split());

//separa el string en diferentes posiciones del array segun sus espacios
console.log(DARK.split(" "));

//separa el string por letras enlas diferentes posiciones del array 
console.log(DARK.split(""));


let Correo = "zelechos"+9+"@hotmail.com";
console.log(Correo);
//Para Convertir cualquier valor a un String 
let cadena = String(Correo);
console.log(cadena);


//Metodos para Transformar TEXTO
let num = 99;
let text = "JavaScript me da de Comer";
let text2  ="  JAVA es mejor , pero quiero ser experto en JAVA  ";

let Dato = num.toString();//para converti cualquier dato a String
    Dato = text.toUpperCase();//par convertir el texto en mayusculas
    Dato = text.toLowerCase();//para converti en minusculas el texto
console.log("el dato es : "+Dato+"\nsu tipo de dato es : "+typeof(Dato));
console.log("ha sido tranformado correctamente. . .");

//Calcular la Longitud de un TEXTO

console.log(text2.length);//Para contar cuantos caracteres tiene el TEXTO

//Concatenacion de texto ovbio

let TextRes = text.concat(text2);//claro que tambien podemos usar el simbolo mas pero con concat() se ve mas elegante
console.log(TextRes);

// Buscar una palabra especifica dentro de un TEXTO

let buscar = text2.indexOf("JAVA");//encuentra la primera palabra
    buscar = text2.lastIndexOf("JAVA");//Encutra la ultima palabra
    buscar  = text2.search("JAVA")//casi es lo mismo que indexof
    buscar = text2.match("JAVA");//TE DEVUELVE LA PALABRA DENTRO DE UN ARRAY EN EL INDICE 0
    buscar = text2.startsWith("JAVA");//para encontrar palabras al pricipio
    buscar = text2.endsWith("JAVA");//para encontrar palabras al final


    buscar = text2.replace("JAVA","Python");//para reemplazar una palabra seleccionada con otra
    buscar = text2.slice(16,21);//para eliminar el texto  del indice introducido
    buscar = text2.split(" ");//introducide el string en un array con " " separas todas las palabras y las pone en diferentes posiciones del array
    buscar = text2.trim();//quita los espacios de adelante y atras de el texto
    buscar = text2.substr(1,4);//Te saca la palabra que deseas de una string
    buscar = text2.includes("ser");//busca una palabra y si la encuentra te devuelve un valor Booleano true

    buscar = text2.match(/JAVA/g);//TE DEVUELVE TODAS LAS CONSIDENCIAS DE UN ARRAY EN UN VECTOR
    buscar = text2.charAt(1);//Para sacar la letras especificada por su posicion
    console.log(buscar);


    
