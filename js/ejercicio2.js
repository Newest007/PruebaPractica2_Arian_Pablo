document.addEventListener("DOMContentLoaded", function(){

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
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
const btndelante = document.querySelector("#btnGuardarDelante");

/*A continuación añadiremos acciones a los input para que solo se pueda hacer click en el botón 
correspondiente si solo si, se han llenado cada uno de los campos en ese apartado */

//Para el portero
document.getElementById("inputNombrePortero").addEventListener("keyup", validarPortero);
document.getElementById("inputCarnetPortero").addEventListener("keyup", validarPortero);
document.getElementById("inputEdadPortero").addEventListener("keyup", validarPortero);
document.getElementById("selectSexoPortero").addEventListener("change", validarPortero);

//Para los defensas
document.getElementById("inputNombrePortero").addEventListener("keyup", validarPortero);
document.getElementById("inputCarnetPortero").addEventListener("keyup", validarPortero);
document.getElementById("inputEdadPortero").addEventListener("keyup", validarPortero);
document.getElementById("selectSexoPortero").addEventListener("change", validarPortero);

//Para los mediocampistas
document.getElementById("inputNombrePortero").addEventListener("keyup", validarPortero);
document.getElementById("inputCarnetPortero").addEventListener("keyup", validarPortero);
document.getElementById("inputEdadPortero").addEventListener("keyup", validarPortero);
document.getElementById("selectSexoPortero").addEventListener("change", validarPortero);

//Para los delanteros
document.getElementById("inputNombrePortero").addEventListener("keyup", validarPortero);
document.getElementById("inputCarnetPortero").addEventListener("keyup", validarPortero);
document.getElementById("inputEdadPortero").addEventListener("keyup", validarPortero);
document.getElementById("selectSexoPortero").addEventListener("change", validarPortero);

/*Para el nombre del equipo
document.getElementById("inputNombrePortero").addEventListener("keyup", validarPortero);
document.getElementById("inputCarnetPortero").addEventListener("keyup", validarPortero);
document.getElementById("inputEdadPortero").addEventListener("keyup", validarPortero);
document.getElementById("selectSexoPortero").addEventListener("change", validarPortero);
*/

//Funciones de validación
function validarEquipo(){
    //Variables para la validar
    let nombre;
    vali = 0;

    nombre = document.getElementById("inputNombreEquipo").value;

    if (nombre == "") {
        vali++;
    }
    if (vali == 0) {
        document.getElementById("btnGuardarEquipo").disabled = false;
    } else {
        document.getElementById("btnGuardarEquipo").disabled = true;
    }

}

function validarPortero(){
    //variables para la validación
    let nombre;
    let carnet;
    let edad;
    let sexo;
    vali = 0; //Nos servirá para validar

    //Asignacion de variables
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
    let nombre1, nombre2, nombre3, nombre4;
    let carnet1, carnet2, carnet3, carnet4;
    let edad1, edad2, edad3, edad4;
    let sexo1, sexo2, sexo3, sexo4;
    vali = 0; //Nos servirá para validar

    //Asignacion de variables
    nombre1 = document.getElementById("inputNombreDefensa1").value;
    carnet1 = document.getElementById("inputCarnetDefensa1").value;
    edad1 = document.getElementById("inputEdadDefensa1").value;
    sexo1 = document.getElementById("selectSexoDefensa1").value;

    nombre2 = document.getElementById("inputNombreDefensa2").value;
    carnet2 = document.getElementById("inputCarnetDefensa2").value;
    edad2 = document.getElementById("inputEdadDefensa2").value;
    sexo2 = document.getElementById("selectSexoDefensa2").value;
    
    nombre3 = document.getElementById("inputNombreDefensa3").value;
    carnet3 = document.getElementById("inputCarnetDefensa3").value;
    edad3 = document.getElementById("inputEdadDefensa3").value;
    sexo3 = document.getElementById("selectSexoDefensa3").value;

    nombre4 = document.getElementById("inputNombreDefensa4").value;
    carnet4 = document.getElementById("inputCarnetDefensa4").value;
    edad4 = document.getElementById("inputEdadDefensa4").value;
    sexo4 = document.getElementById("selectSexoDefensa4").value;

    //Validaciones
    if (nombre1 == "" || carnet1 == "" || edad1 == "" || sexo1 == "" || nombre2 == "" || carnet2 == "" || edad2 == "" || sexo2 == "" || nombre3 == "" || carnet3 == "" || edad3 == "" || sexo3 == "" || nombre4 == "" || carnet4 == "" || edad4 == "" || sexo4 == "") {
        vali++;
    }
    if (vali == 0) {
        document.getElementById("btnGuardarDefensas").disabled = false;
    } else {
        document.getElementById("btnGuardarDefensas").disabled = true;
    }
}

function validarMedios(){
    //variables para la validación
    let nombre1, nombre2, nombre3, nombre4;
    let carnet1, carnet2, carnet3, carnet4;
    let edad1, edad2, edad3, edad4;
    let sexo1, sexo2, sexo3, sexo4;
    vali = 0; //Nos servirá para validar

    //Asignacion de variables
    nombre1 = document.getElementById("inputNombreMedio1").value;
    carnet1 = document.getElementById("inputCarnetMedio1").value;
    edad1 = document.getElementById("inputEdadMedio1").value;
    sexo1 = document.getElementById("selectSexoMedio1").value;

    nombre2 = document.getElementById("inputNombreMedio2").value;
    carnet2 = document.getElementById("inputCarnetMedio2").value;
    edad2 = document.getElementById("inputEdadMedio2").value;
    sexo2 = document.getElementById("selectSexoMedio2").value;
    
    nombre3 = document.getElementById("inputNombreMedio3").value;
    carnet3 = document.getElementById("inputCarnetMedio3").value;
    edad3 = document.getElementById("inputEdadMedio3").value;
    sexo3 = document.getElementById("selectSexoDefensa3").value;

    nombre4 = document.getElementById("inputNombreMedio4").value;
    carnet4 = document.getElementById("inputCarnetMedio4").value;
    edad4 = document.getElementById("inputEdadMedio4").value;
    sexo4 = document.getElementById("selectSexoMedio4").value;

    //Validaciones
    if (nombre1 == "" || carnet1 == "" || edad1 == "" || sexo1 == "" || nombre2 == "" || carnet2 == "" || edad2 == "" || sexo2 == "" || nombre3 == "" || carnet3 == "" || edad3 == "" || sexo3 == "" || nombre4 == "" || carnet4 == "" || edad4 == "" || sexo4 == "") {
        vali++;
    }
    if (vali == 0) {
        document.getElementById("btnGuardarPortero").disabled = false;
    } else {
        document.getElementById("btnGuardarPortero").disabled = true;
    }
}

function validarDelanteros(){
    //variables para la validación
    let nombre1, nombre2, nombre3, nombre4;
    let carnet1, carnet2, carnet3, carnet4;
    let edad1, edad2, edad3, edad4;
    let sexo1, sexo2, sexo3, sexo4;
    vali = 0; //Nos servirá para validar

    //Asignacion de variables
    nombre1 = document.getElementById("inputNombreDelante1").value;
    carnet1 = document.getElementById("inputCarnetDelante1").value;
    edad1 = document.getElementById("inputEdadDelante1").value;
    sexo1 = document.getElementById("selectSexoDelante1").value;

    nombre2 = document.getElementById("inputNombreDelante2").value;
    carnet2 = document.getElementById("inputCarnetDelante2").value;
    edad2 = document.getElementById("inputEdadDelante2").value;
    sexo2 = document.getElementById("selectSexoDelante2").value;
    
    nombre3 = document.getElementById("inputNombreDelante3").value;
    carnet3 = document.getElementById("inputCarnetDelante3").value;
    edad3 = document.getElementById("inputEdadDelante3").value;
    sexo3 = document.getElementById("selectSexoDeDelante3").value;

    nombre4 = document.getElementById("inputNombreDelante4").value;
    carnet4 = document.getElementById("inputCarnetDelante4").value;
    edad4 = document.getElementById("inputEdadDelante4").value;
    sexo4 = document.getElementById("selectSexoDelante4").value;

    //Validaciones
    if (nombre1 == "" || carnet1 == "" || edad1 == "" || sexo1 == "" || nombre2 == "" || carnet2 == "" || edad2 == "" || sexo2 == "" || nombre3 == "" || carnet3 == "" || edad3 == "" || sexo3 == "" || nombre4 == "" || carnet4 == "" || edad4 == "" || sexo4 == "") {
        vali++;
    }
    if (vali == 0) {
        document.getElementById("btnGuardarDelante").disabled = false;
    } else {
        document.getElementById("btnGuardarDelante").disabled = true;
    }
}

//Funciones que ejecutaran los botones



})
