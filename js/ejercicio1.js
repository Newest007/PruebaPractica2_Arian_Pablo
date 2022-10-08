const btnAreaCuadrado = document.getElementById("btn-cuadro");
const btnAreaTriangulo = document.getElementById("btn-triangulo");
const btnAreaRectangulo = document.getElementById("btn-rectangulo");
const btnAreaCirculo = document.getElementById("btn-circulo");

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
            contenedorResultado.innerHTML = `El área del triángulo es ${resultado}cm`;
        } else {
            contenedorResultado.innerHTML = `Solamente se permiten valores positivos`;
        }
    } else {
        contenedorResultado.innerHTML = `Debe de ingresar números válidos`;
    }
}

function areaRectangulo(){
    const contenedorResultado = document.getElementById("resultadoRectangulo");
    let base = prompt("Ingrese la base (b) del rectangulo (en cm)");
    let altura = prompt("Ingrese la altura (a) del rectangulo (en cm)");
    if(Number(base) && Number(altura)){
        if(base >= 0 && altura >= 0){
            resultado = base * altura;
            contenedorResultado.innerHTML = `El área del rectángulo es ${resultado}cm`;
        } else {
            contenedorResultado.innerHTML = `Solamente se permiten valores positivos`;
        }
    } else {
        contenedorResultado.innerHTML = `Debe de ingresar números válidos`;
    }
}

function areaCirculo(){
    const contenedorResultado = document.getElementById("resultadoCirculo");
    let radio = prompt("Ingrese el radio del círculo (en cm)");
    if(Number(radio) && radio > 0){
        resultado = 3.1416 * Math.pow(radio,2);
        contenedorResultado.innerHTML = `El área del círculo con radio ${radio}cm es ${resultado}cm`;
    } else{
        contenedorResultado.innerHTML = `Debe de ingresar un valor válido`;
    }
}

btnAreaCuadrado.addEventListener("click",areaCuadrado);
btnAreaTriangulo.addEventListener("click",areaTriangulo);
btnAreaRectangulo.addEventListener("click",areaRectangulo);
btnAreaCirculo.addEventListener("click",areaCirculo);