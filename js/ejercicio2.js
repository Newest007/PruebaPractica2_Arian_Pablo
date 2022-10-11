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
const btnMostrar = document.querySelector("#btnMostrarDatos");

//Agregamos los eventos a los respectivos botones
btnEquipo.addEventListener("click", addEquipo);
btnPortero.addEventListener("click", addPortero);
btnDefensa.addEventListener("click", addDefensas);
btnMedios.addEventListener("click", addMedios);
btnDelante.addEventListener("click", addDelante);
btnMostrar.addEventListener("click", mostrarDatos);


//Codificamos las funciones antes colocadas

function addEquipo(){
    nombreEquipo = document.querySelector("#inputNombreEquipo").value;

}

function addPortero(){
    arrayNombres[0] = document.querySelector("#inputNombrePortero").value.toString();
    arrayCarnet[0] = document.querySelector("#inputCarnetPortero").value.toString();
    arrayEdad[0] = document.querySelector("#inputEdadPortero").value.toString();
    arraySexo[0] = document.querySelector("#selectSexoPortero").value.toString();

}

function addDefensas(){
    arrayNombres[1] = document.querySelector("#inputNombreDefensa1").value.toString();
    arrayCarnet[1] = document.querySelector("#inputCarnetDefensa1").value.toString();
    arrayEdad[1] = document.querySelector("#inputEdadDefensa1").value.toString();
    arraySexo[1] = document.querySelector("#selectSexoDefensa1").value.toString();

    arrayNombres[2] = document.querySelector("#inputNombreDefensa2").value.toString();
    arrayCarnet[2] = document.querySelector("#inputCarnetDefensa2").value.toString();
    arrayEdad[2] = document.querySelector("#inputEdadDefensa2").value.toString();
    arraySexo[2] = document.querySelector("#selectSexoDefensa2").value.toString();

    arrayNombres[3] = document.querySelector("#inputNombreDefensa3").value.toString();
    arrayCarnet[3] = document.querySelector("#inputCarnetDefensa3").value.toString();
    arrayEdad[3] = document.querySelector("#inputEdadDefensa3").value.toString();
    arraySexo[3] = document.querySelector("#selectSexoDefensa3").value.toString();

    arrayNombres[4] = document.querySelector("#inputNombreDefensa4").value.toString();
    arrayCarnet[4] = document.querySelector("#inputCarnetDefensa4").value.toString();
    arrayEdad[4] = document.querySelector("#inputEdadDefensa4").value.toString();
    arraySexo[4] = document.querySelector("#selectSexoDefensa4").value.toString();

}

function addMedios(){
    arrayNombres[5] = document.querySelector("#inputNombreMedio1").value.toString();
    arrayCarnet[5] = document.querySelector("#inputCarnetMedio1").value.toString();
    arrayEdad[5] = document.querySelector("#inputEdadMedio1").value.toString();
    arraySexo[5] = document.querySelector("#selectSexoMedio1").value.toString();

    arrayNombres[6] = document.querySelector("#inputNombreMedio2").value.toString();
    arrayCarnet[6] = document.querySelector("#inputCarnetDMedio").value.toString();
    arrayEdad[6] = document.querySelector("#inputEdadMedio2").value.toString();
    arraySexo[6] = document.querySelector("#selectSexoMedio2").value.toString();

    arrayNombres[7] = document.querySelector("#inputNombreMedio3").value.toString();
    arrayCarnet[7] = document.querySelector("#inputCarnetMedio3").value.toString();
    arrayEdad[7] = document.querySelector("#inputEdadMedio3").value.toString();
    arraySexo[7] = document.querySelector("#selectSexoMedio3").value.toString();

    arrayNombres[8] = document.querySelector("#inputNombreMedio4").value.toString();
    arrayCarnet[8] = document.querySelector("#inputCarnetMedio4").value.toString();
    arrayEdad[8] = document.querySelector("#inputEdadMedio4").value.toString();
    arraySexo[8] = document.querySelector("#selectSexoMedio4").value.toString();

}

function addDelante(){
    arrayNombres[9] = document.querySelector("#inputNombreDelante1").value.toString();
    arrayCarnet[9] = document.querySelector("#inputCarnetDelante1").value.toString();
    arrayEdad[9] = document.querySelector("#inputEdadDelante1").value.toString();
    arraySexo[9] = document.querySelector("#selectSexoDelante1").value.toString();

    arrayNombres[10] = document.querySelector("#inputNombreDelante2").value.toString();
    arrayCarnet[10] = document.querySelector("#inputCarnetDelante2").value.toString();
    arrayEdad[10] = document.querySelector("#inputEdadDelante2").value.toString();
    arraySexo[10] = document.querySelector("#selectSexoDelante2").value.toString();
}

function mostrarDatos(){

    const divTabla = document.querySelector("divTabla");

    let listado = `<h3> Equipo: ${nombreEquipo}`;
    listado +="<ol>";
    listado += `<li><b>Nombre:</b> ${arrayNombres[0]} <b>Carnet:</b> ${arrayCarnet[0]} <b>Edad:</b> ${arrayEdad[0]} <b>Sexo:</b> ${arraySexo[0]} <b>Posición:</b> Portero`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[2]} <b>Carnet:</b> ${arrayCarnet[2]} <b>Edad:</b> ${arrayEdad[2]} <b>Sexo:</b> ${arraySexo[2]} <b>Posición:</b> Defensa`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[3]} <b>Carnet:</b> ${arrayCarnet[3]} <b>Edad:</b> ${arrayEdad[3]} <b>Sexo:</b> ${arraySexo[3]} <b>Posición:</b> Defensa`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[4]} <b>Carnet:</b> ${arrayCarnet[4]} <b>Edad:</b> ${arrayEdad[4]} <b>Sexo:</b> ${arraySexo[4]} <b>Posición:</b> Defensa`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[5]} <b>Carnet:</b> ${arrayCarnet[5]} <b>Edad:</b> ${arrayEdad[5]} <b>Sexo:</b> ${arraySexo[5]} <b>Posición:</b> Defensa`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[6]} <b>Carnet:</b> ${arrayCarnet[6]} <b>Edad:</b> ${arrayEdad[6]} <b>Sexo:</b> ${arraySexo[6]} <b>Posición:</b> Mediocampista`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[7]} <b>Carnet:</b> ${arrayCarnet[7]} <b>Edad:</b> ${arrayEdad[7]} <b>Sexo:</b> ${arraySexo[7]} <b>Posición:</b> Mediocampista`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[8]} <b>Carnet:</b> ${arrayCarnet[8]} <b>Edad:</b> ${arrayEdad[8]} <b>Sexo:</b> ${arraySexo[8]} <b>Posición:</b> Mediocampista`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[9]} <b>Carnet:</b> ${arrayCarnet[9]} <b>Edad:</b> ${arrayEdad[9]} <b>Sexo:</b> ${arraySexo[9]} <b>Posición:</b> Mediocampista`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[10]} <b>Carnet:</b> ${arrayCarnet[10]} <b>Edad:</b> ${arrayEdad[10]} <b>Sexo:</b> ${arraySexo[10]} <b>Posición:</b> Delantero`;
    listado += `<li><b>Nombre:</b> ${arrayNombres[11]} <b>Carnet:</b> ${arrayCarnet[11]} <b>Edad:</b> ${arrayEdad[11]} <b>Sexo:</b> ${arraySexo[11]} <b>Posición:</b> Delantero`;
    
    divTabla.innerHTML = listado;

  /*document.getElementById("divTabla").innerHTML = `<h3>${nombreEquipo}</h3><br>
                    <table class="table table-bordered"><br>
                        <thead><br>
                            <tr><br>
                                <th scope="col">#</th><br>
                                <th scope="col">Nombre</th><br>
                                <th scope="col">Carnet</th><br>
                                <th scope="col">Edad</th><br>
                                <th scope="col">Sexo</th><br>
                                <th scope="col">Posición</th><br>
                            </tr><br>
                        </thead><br>
                        <tbody><br>
                            <tr><br>
                                <th scope="row">1</th><br>
                                <th>${arrayNombres[0]}</th><br>
                                <th>${arrayCarnet[0]}</th><br>
                                <th>${arrayEdad[0]}</th><br>
                                <th>${arraySexo[0]}</th><br>
                                <th>Portero</th><br>
                            </tr><br>`

                            /*
                            <tr><br>
                                <th scope="row">2</th><br>
                                <th></th><br>
                                <th></th><br>
                                <th></th><br>
                                <th></th><br>
                                <th>Defensa</th>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Defensa</th>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Defensa</th>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Defensa</th>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Mediocampista</th>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Mediocampista</th>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Mediocampista</th>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Mediocampista</th>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Delantero</th>
                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Delantero</th>
                            </tr>
                        </tbody>
                    </table>
                    */
}

})
