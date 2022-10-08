const btnAreaCuadrado = document.getElementById("btn-cuadro");
const btnAreaTriangulo = document.getElementById("btn-triangulo");

function areaCuadrado(){
    const contenedorResultado = document.getElementById("resultadoCuadrado");
    let lado = prompt("Ingrese el lado del cuadro (en cm)");
    if(Number(lado) && lado > 0){
        resultado = Math.pow(lado,2);
        contenedorResultado.innerHTML = `El área del cuadrado con lado ${lado}cm es ${resultado}cm`;
    } else{
        contenedorResultado.innerHTML = `Debe de ingresar un valor válido`;
    }
}

function areaTriangulo(){
    const contenedorResultado = document.getElementById("resultadoTriangulo");
    let base = prompt("Ingrese la base del triángulo (en cm)");
    let altura = prompt("Ingrese la altura del triángulo (en cm)");
    if(Number(base) && Number(altura)) {
        if(base > 0 && altura > 0){
            resultado = (base * altura)/ 2;
            contenedorResultado.innerHTML = `El área del triángulo es ${resultado}`
        } else {
            contenedorResultado.innerHTML = `Solamente se permiten valores positivos`;
        }
    } else {
        contenedorResultado.innerHTML = `Debe de ingresar números válidos`;
    }
}

btnAreaCuadrado.addEventListener("click",areaCuadrado);
btnAreaTriangulo.addEventListener("click",areaTriangulo)