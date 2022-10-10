document.addEventListener("DOMContentLoaded", function(){

//Definimos los arreglos y la variable que utilizazremos
let nombreEquipo;
let arrayNombres = [];
let arrayCarnet = [];
let arrayEdad = [];
let arraySexo = [];


//Accedemos a los botones mediante la API DOM
const btnEquipo = document.querySelector("#btnEquipo");
const btnPortero = document.querySelector("#btnGuardarPortero");
const btnDefensa = document.querySelector("#btnGuardarDefensas");
const btnMedios = document.querySelector("#btnGuardarMedios");
const btndelante = document.querySelector("#btnGuardarDelante");

/*A continuación añadiremos acciones a los input para que solo se pueda hacer click en el botón 
correspondiente si solo si, se han llenado cada uno de los campos en ese apartado */

//Para el portero
document.getElementById("inputNombrePortero").addEventListener("keyup", validarPortero);
document.getElementById("inputCarnetPortero").addEventListener("keyup", validarPortero);
document.getElementById("inputEdadPortero").addEventListener("keyup", validarPortero);
document.getElementById("selectSexoPortero").addEventListener("change", validarPortero);


//Funciones de validación

function validarPortero(){
    //variables para la validación
    let nombre;
    let carnet;
    let edad;
    let sexo;
    vali = 0; //Nos servirá para validar


    nombre = document.getElementById("inputNombrePortero").value;
    carnet = document.getElementById("inputCarnetPortero").value;
    edad = document.getElementById("inputEdadPortero").value;
    sexo = document.getElementById("selectSexoPortero").value;

    //Validaciones
    if (nombre == "" || carnet == "" || edad == "" || sexo == "") {
        vali++;
    }
    if (vali == 0) {
        document.getElementById("btnGuardarPortero").disabled = false;
    } else {
        document.getElementById("btnGuardarPortero").disabled = true;
    }
}

function validarDefensas(){
    //variables para la validación
    let nombre;
    let carnet;
    let edad = [];
    let sexo = [];
    vali = 0; //Nos servirá para validar


    nombre = document.getElementById("inputNombrePortero").value;
    carnet = document.getElementById("inputCarnetPortero").value;
    edad = document.getElementById("inputEdadPortero").value;
    sexo = document.getElementById("selectSexoPortero").value;

    //Validaciones
    if (nombre == "" || carnet == "" || edad == "" || sexo == "") {
        vali++;
    }
    if (vali == 0) {
        document.getElementById("btnGuardarPortero").disabled = false;
    } else {
        document.getElementById("btnGuardarPortero").disabled = true;
    }
}

})
