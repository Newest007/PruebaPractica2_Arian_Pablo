document.addEventListener("DOMContentLoaded", function(){

//Validaciones de campos vacios de bootstrap
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()

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
const btnDelante = document.querySelector("#btnGuardarDelante");

//Agregamos los eventos a los respectivos botones
btnEquipo.addEventListener("click", addEquipo);
btnPortero.addEventListener("click", addPortero);
btnDefensa.addEventListener("click", addDefensas);
btnMedios.addEventListener("click", addMedios);
btnDelante.addEventListener("click", addDelante);

//Codificamos las funciones antes colocadas

function addEquipo(){
    nombreEquipo = document.querySelector("#inputNombreEquipo").value.toString();
}

function addPortero(){
    arrayNombres[0] = document.querySelector("#inputNombrePortero").value.toString();
    arrayCarnet[0] = document.querySelector("#inputCarnetPortero").value.toString();
    arrayEdad[0] = document.querySelector("#inputEdadPortero").value.toString();
    arraySexo[0] = document.querySelector("#inputSexoPortero").value.toString();

}

function addDefensas(){
    arrayNombres[1] = document.querySelector("#inputNombreDefensa1").value.toString();
    arrayCarnet[1] = document.querySelector("#inputCarnetDefensa1").value.toString();
    arrayEdad[1] = document.querySelector("#inputEdadDefensa1").value.toString();
    arraySexo[1] = document.querySelector("#inputSexoDefensa1").value.toString();

    arrayNombres[2] = document.querySelector("#inputNombreDefensa2").value.toString();
    arrayCarnet[2] = document.querySelector("#inputCarnetDefensa2").value.toString();
    arrayEdad[2] = document.querySelector("#inputEdadDefensa2").value.toString();
    arraySexo[2] = document.querySelector("#inputSexoDefensa2").value.toString();

    arrayNombres[3] = document.querySelector("#inputNombreDefensa3").value.toString();
    arrayCarnet[3] = document.querySelector("#inputCarnetDefensa3").value.toString();
    arrayEdad[3] = document.querySelector("#inputEdadDefensa3").value.toString();
    arraySexo[3] = document.querySelector("#inputSexoDefensa3").value.toString();

    arrayNombres[4] = document.querySelector("#inputNombreDefensa4").value.toString();
    arrayCarnet[4] = document.querySelector("#inputCarnetDefensa4").value.toString();
    arrayEdad[4] = document.querySelector("#inputEdadDefensa4").value.toString();
    arraySexo[4] = document.querySelector("#inputSexoDefensa4").value.toString();

}

function addMedios(){
    arrayNombres[5] = document.querySelector("#inputNombreMedio1").value.toString();
    arrayCarnet[5] = document.querySelector("#inputCarnetMedio1").value.toString();
    arrayEdad[5] = document.querySelector("#inputEdadMedio1").value.toString();
    arraySexo[5] = document.querySelector("#inputSexoMedio1").value.toString();

    arrayNombres[6] = document.querySelector("#inputNombreMedio2").value.toString();
    arrayCarnet[6] = document.querySelector("#inputCarnetDMedio").value.toString();
    arrayEdad[6] = document.querySelector("#inputEdadMedio2").value.toString();
    arraySexo[6] = document.querySelector("#inputSexoMedio2").value.toString();

    arrayNombres[7] = document.querySelector("#inputNombreMedio3").value.toString();
    arrayCarnet[7] = document.querySelector("#inputCarnetMedio3").value.toString();
    arrayEdad[7] = document.querySelector("#inputEdadMedio3").value.toString();
    arraySexo[7] = document.querySelector("#inputSexoMedio3").value.toString();

    arrayNombres[8] = document.querySelector("#inputNombreMedio4").value.toString();
    arrayCarnet[8] = document.querySelector("#inputCarnetMedio4").value.toString();
    arrayEdad[8] = document.querySelector("#inputEdadMedio4").value.toString();
    arraySexo[8] = document.querySelector("#inputSexoMedio4").value.toString();

}

function addDelante(){
    arrayNombres[9] = document.querySelector("#inputNombreDelante1").value.toString();
    arrayCarnet[9] = document.querySelector("#inputCarnetDelante1").value.toString();
    arrayEdad[9] = document.querySelector("#inputEdadDelante1").value.toString();
    arraySexo[9] = document.querySelector("#inputSexoDelante1").value.toString();

    arrayNombres[10] = document.querySelector("#inputNombreDelante2").value.toString();
    arrayCarnet[10] = document.querySelector("#inputCarnetDelante2").value.toString();
    arrayEdad[10] = document.querySelector("#inputEdadDelante2").value.toString();
    arraySexo[10] = document.querySelector("#inputSexoDelante2").value.toString();
}


})
