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

const containerEquipo = document.querySelector("#containerEquipo");


//Accedemos a los botones mediante la API DOM
const btnEquipo = document.querySelector("#btnGuardarEquipo");
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
    nombreEquipo = document.querySelector("#inputNombreEquipo").value.toString();

    alert("Se ha ingresado el nombre de tu equipo");

}

function addPortero(){

    arrayNombres[0] = document.querySelector("#inputNombrePortero").value.toString();
    arrayCarnet[0] = document.querySelector("#inputCarnetPortero").value.toString();
    arrayEdad[0] = document.querySelector("#inputEdadPortero").value.toString();
    arraySexo[0] = document.querySelector("#selectSexoPortero").value.toString();

    if (arrayNombres[0] == "" || arrayCarnet[0] == "" || arrayEdad[0] == "" || arraySexo[0] == "" || arrayEdad[0] <= 0) {
        alert("Debe ingresar todos los valores correctamente")
    }else{
        alert("Se registro el portero");
    }
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

    if (arrayNombres[1] == "" || arrayCarnet[1] == "" || arrayEdad[1] == "" || arraySexo[1] == "" || arrayEdad[1] <= 0 ||
    arrayNombres[2] == "" || arrayCarnet[2] == "" || arrayEdad[2] == "" || arraySexo[2] == "" || arrayEdad[2] <= 0 ||
    arrayNombres[3] == "" || arrayCarnet[3] == "" || arrayEdad[3] == "" || arraySexo[3] == "" || arrayEdad[3] <= 0 ||
    arrayNombres[4] == "" || arrayCarnet[4] == "" || arrayEdad[4] == "" || arraySexo[4] == "" || arrayEdad[4] <= 0) {
        alert("Debe ingresar todos los valores correctamente")
    }else{
        alert("Se registraron los defensas de tu equipo");
    }
}

function addMedios(){
    arrayNombres[5] = document.querySelector("#inputNombreMedio1").value.toString();
    arrayCarnet[5] = document.querySelector("#inputCarnetMedio1").value.toString();
    arrayEdad[5] = document.querySelector("#inputEdadMedio1").value.toString();
    arraySexo[5] = document.querySelector("#selectSexoMedio1").value.toString();

    arrayNombres[6] = document.querySelector("#inputNombreMedio2").value.toString();
    arrayCarnet[6] = document.querySelector("#inputCarnetMedio2").value.toString();
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

    if (arrayNombres[5] == "" || arrayCarnet[5] == "" || arrayEdad[5] == "" || arraySexo[5] == "" || arrayEdad[5] <= 0 ||
    arrayNombres[6] == "" || arrayCarnet[6] == "" || arrayEdad[6] == "" || arraySexo[6] == "" || arrayEdad[6] <= 0 ||
    arrayNombres[7] == "" || arrayCarnet[7] == "" || arrayEdad[7] == "" || arraySexo[7] == "" || arrayEdad[7] <= 0 ||
    arrayNombres[8] == "" || arrayCarnet[8] == "" || arrayEdad[8] == "" || arraySexo[8] == "" || arrayEdad[8] <= 0) {
        alert("Debe ingresar todos los valores correctamente")
    }else{
        alert("Se registraron los defensas de tu equipo");
    }    
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

    if (arrayNombres[9] == "" || arrayCarnet[9] == "" || arrayEdad[9] == "" || arraySexo[9] == "" || arrayEdad[9] <= 0 ||
    arrayNombres[10] == "" || arrayCarnet[10] == "" || arrayEdad[10] == "" || arraySexo[10] == "" || arrayEdad[10] <= 0) {
        alert("Debe ingresar todos los valores correctamente")
    }else{
        alert("Se registraron los defensas de tu equipo");
    } 
}

function mostrarDatos(){

    let nombre =`<p> Nombre del equipo: <b>${nombreEquipo}</b></p>`;
    containerNombreEquipo.innerHTML = nombre;



    let tabla = "<table class='table table-striped table-hover'>";
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th scope='col'>#</th>";
    tabla += "<th scope='col'>Nombre</th>";
    tabla += "<th scope='col'>Carnet</th>";
    tabla += "<th scope='col'>Edad</th>";
    tabla += "<th scope='col'>Sexo</th>";
    tabla += "<th scope='col'>Posición</th>";
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    tabla += `<tr>`;
    tabla += `<th scope='row'>1</td>`;
    tabla += `<td>${arrayNombres[0]}</td>`;
    tabla += `<td>${arrayCarnet[0]}</td>`;
    tabla += `<td>${arrayEdad[0]}</td>`;
    tabla += `<td>${arraySexo[0]}</td>`;
    tabla += `<td>Portero</td>`;
    tabla += `</tr>`;
    tabla += `<tr>`;
    tabla += `<td scope='row'>2</td>`;
    tabla += `<td>${arrayNombres[1]}</td>`;
    tabla += `<td>${arrayCarnet[1]}</td>`;
    tabla += `<td>${arrayEdad[1]}</td>`;
    tabla += `<td>${arraySexo[1]}</td>`;
    tabla += `<td>Defensa</td>`;
    tabla += `</tr>`;
    tabla += `<tr>`;
    tabla += `<td scope='row'>3</td>`;
    tabla += `<td>${arrayNombres[2]}</td>`;
    tabla += `<td>${arrayCarnet[2]}</td>`;
    tabla += `<td>${arrayEdad[2]}</td>`;
    tabla += `<td>${arraySexo[2]}</td>`;
    tabla += `<td>Defensa</td>`;
    tabla += `</tr>`;
    tabla += `<td scope='row'>4</td>`;
    tabla += `<td>${arrayNombres[3]}</td>`;
    tabla += `<td>${arrayCarnet[3]}</td>`;
    tabla += `<td>${arrayEdad[3]}</td>`;
    tabla += `<td>${arraySexo[3]}</td>`;
    tabla += `<td>Defensa</td>`;
    tabla += `</tr>`;
    tabla += `<tr>`;
    tabla += `<td scope='row'>5</td>`;
    tabla += `<td>${arrayNombres[4]}</td>`;
    tabla += `<td>${arrayCarnet[4]}</td>`;
    tabla += `<td>${arrayEdad[4]}</td>`;
    tabla += `<td>${arraySexo[4]}</td>`;
    tabla += `<td>Defensa</td>`;
    tabla += `</tr>`;
    tabla += `<tr>`;
    tabla += `<td scope='row'>6</td>`;
    tabla += `<td>${arrayNombres[5]}</td>`;
    tabla += `<td>${arrayCarnet[5]}</td>`;
    tabla += `<td>${arrayEdad[5]}</td>`;
    tabla += `<td>${arraySexo[5]}</td>`;
    tabla += `<td>Mediocampista</td>`;
    tabla += `</tr>`;
    tabla += `<tr>`;
    tabla += `<td scope='row'>7</td>`;
    tabla += `<td>${arrayNombres[6]}</td>`;
    tabla += `<td>${arrayCarnet[6]}</td>`;
    tabla += `<td>${arrayEdad[6]}</td>`;
    tabla += `<td>${arraySexo[6]}</td>`;
    tabla += `<td>Mediocampista</td>`;
    tabla += `</tr>`;
    tabla += `<tr>`;
    tabla += `<td scope='row'>8</td>`;
    tabla += `<td>${arrayNombres[7]}</td>`;
    tabla += `<td>${arrayCarnet[7]}</td>`;
    tabla += `<td>${arrayEdad[7]}</td>`;
    tabla += `<td>${arraySexo[7]}</td>`;
    tabla += `<td>Mediocampista</td>`;
    tabla += `</tr>`;
    tabla += `<tr>`;
    tabla += `<td scope='row'>9</td>`;
    tabla += `<td>${arrayNombres[8]}</td>`;
    tabla += `<td>${arrayCarnet[8]}</td>`;
    tabla += `<td>${arrayEdad[8]}</td>`;
    tabla += `<td>${arraySexo[8]}</td>`;
    tabla += `<td>Mediocampista</td>`;
    tabla += `</tr>`;
    tabla += `<tr>`;
    tabla += `<td scope='row'>10</td>`;
    tabla += `<td>${arrayNombres[9]}</td>`;
    tabla += `<td>${arrayCarnet[9]}</td>`;
    tabla += `<td>${arrayEdad[9]}</td>`;
    tabla += `<td>${arraySexo[9]}</td>`;
    tabla += `<td>Delantero</td>`;
    tabla += `</tr>`;
    tabla += `<tr>`;
    tabla += `<td scope='row'>11</td>`;
    tabla += `<td>${arrayNombres[10]}</td>`;
    tabla += `<td>${arrayCarnet[10]}</td>`;
    tabla += `<td>${arrayEdad[10]}</td>`;
    tabla += `<td>${arraySexo[10]}</td>`;
    tabla += `<td>Delantero</td>`;
    tabla += `</tr>`;
    tabla += "</tbody>";
    tabla += "</table>";
    containerEquipo.innerHTML = tabla;








/*
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
