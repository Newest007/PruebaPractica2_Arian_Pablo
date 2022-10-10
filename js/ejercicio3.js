const btnObtenerRecibo = document.getElementById("btn-calcularRecibo");

function recibo(cantidad1, cantidad2, cantidad3, cantidad4, cantidad5, cantidad6, cantidad7, cantidad8, cantidad9, cantidad10, cantidad11, cantidad12, cantidad13, cantidad14, cantidad15, cantidad16, cantidad17, cantidad18, cantidad19, cantidad20, cantidad21, cantidad22, cantidad23, cantidad24, cantidad25){

    document.getElementById("resultado").innerHTML = "";

    resultado = (cantidad1 * 1.75) + (cantidad2 * 0.40) + (cantidad3 * 0.84) + (cantidad4 * 0.34) + (cantidad5 * 1.50) + (cantidad6 * 1.38) + (cantidad7 * 1.60) + (cantidad8 * 0.35) + (cantidad9 * 0.44) + (cantidad10 * 3.60) +  (cantidad11 * 0.80) + (cantidad12 * 1.33) + (cantidad13 * 1.65) + (cantidad13 * 1.65) + (cantidad14 * 1.52) + (cantidad15 * 0.78) + (cantidad16 * 1.20) + (cantidad17 * 0.45) + (cantidad18 * 0.40) + (cantidad19 * 0.45) + (cantidad20 * 2.75) + (cantidad21 * 0.85) + (cantidad22 * 2.75) + (cantidad23 * 3.75) + (cantidad24 * 0.63) + (cantidad25 * 0.98);
    
    document.getElementById("resultado").innerHTML = `<br> Los detalles del recibo se muestran a continuación: <br> Aguacates x ${cantidad1} = $${cantidad1 * 1.75}
    <br> Ajo x ${cantidad2} = $${cantidad2 * 0.40}
    <br> Apio x ${cantidad3} = $${cantidad3 * 0.84}
    <br> Banano x ${cantidad4} = $${cantidad4 * 0.34}
    <br> Brócoli x ${cantidad5} = $${cantidad5 * 1.50}
    <br> Cebolla blanca x ${cantidad6} = $${cantidad6 * 1.38}
    <br> Cebolla morada x ${cantidad7} = $${cantidad7 * 1.60}
    <br> Chile verde x ${cantidad8} = $${cantidad8 * 0.35}
    <br> Güisquil x ${cantidad9} = $${cantidad9 * 0.44}
    <br> Kiwi x ${cantidad10} = $${cantidad10 * 3.60}
    <br> Lechuga romana x ${cantidad11} = $${cantidad11 * 0.80}
    <br> Manzana gala x ${cantidad12} = $${cantidad12 * 1.33}
    <br> Manzana verde x ${cantidad13} = $${cantidad13 * 1.65}
    <br> Naranja x ${cantidad14} = $${cantidad14 * 1.52}
    <br> Papa x ${cantidad15} = $${cantidad15 * 0.78}
    <br> Papaya x ${cantidad16} = $${cantidad16 * 1.20}
    <br> Pepino x ${cantidad17} = $${cantidad17 * 0.45}
    <br> Pera x ${cantidad18} = $${cantidad18 * 0.40}
    <br> Plátana x ${cantidad19} = $${cantidad19 * 0.45}
    <br> Sandia x ${cantidad20} = $${cantidad20 * 2.75}
    <br> Tomates x ${cantidad21} = $${cantidad21 * 0.85}
    <br> Uva roja x ${cantidad22} = $${cantidad22 * 2.75}
    <br> Uva verde x ${cantidad23} = $${cantidad23 * 3.75}
    <br> Zanahoria x ${cantidad24} = $${cantidad24 * 0.63}
    <br> Zuchini x ${cantidad25} = $${cantidad25 * 0.98}
    <hr> Total = $${resultado}`;

}

btnObtenerRecibo.addEventListener("click", () => {
    recibo(document.getElementById("cantidad1").value, document.getElementById("cantidad2").value, document.getElementById("cantidad3").value, document.getElementById("cantidad4").value, document.getElementById("cantidad5").value, document.getElementById("cantidad6").value, document.getElementById("cantidad7").value, document.getElementById("cantidad8").value, document.getElementById("cantidad9").value, document.getElementById("cantidad10").value, document.getElementById("cantidad11").value, document.getElementById("cantidad12").value, document.getElementById("cantidad13").value, document.getElementById("cantidad14").value, document.getElementById("cantidad15").value, document.getElementById("cantidad16").value, document.getElementById("cantidad17").value, document.getElementById("cantidad18").value, document.getElementById("cantidad19").value, document.getElementById("cantidad20").value, document.getElementById("cantidad21").value, document.getElementById("cantidad22").value, document.getElementById("cantidad23").value, document.getElementById("cantidad24").value, document.getElementById("cantidad25").value);
});