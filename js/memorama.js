let iconos = [], imagen = [], sinfondo = [];
let seleccion;
let btn_reboot = document.getElementById('btn-reboot');

generarTablero()
function cargarIconos(){
    imagen = [
        "../img/aladdin.png",
        "../img/anzuelo.png",
        "../img/caballito.png",
        "../img/dragon-negro.png",
        "../img/Grifo.png",
        "../img/hourglass.png",
        "../img/nota-llave.png",
        "../img/patatita-lobo.png",
        "../img/peso-negro.png",
        "../img/rosa.png",
        "../img/tigre.png",
        "../img/tinta-pluma.png"
    ];
}

function generarTablero() {
    
    cargarIconos();
    selecciones = [];
    let tablero = document.getElementById("tablero");
    let tarjetas = [];

    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
        <div class="area-tarjeta1 div-acomodo" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta1 div-acomodo" id="tarjeta${i}">
                <div class="cara1 trasera div-acomodo" id="trasera${i}">
                    <img src="${imagen[0]}" class="img-carta">
                </div>
                <div class="cara1 superior div-acomodo">
                <img src="../img/back.png" id="img-carta" class="img-margen">
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            imagen.splice(0, 1)
        }
    }

    tarjetas.sort(() => Math.random() - 0.5);
    tablero.innerHTML = tarjetas.join(" ");
    btn_reboot.checked = false;
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i);

    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)";
        selecciones.push(i);
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones);
        selecciones = [];
    }

    if(tarjeta.style.transform = "rotateY(180deg)"){
        if(tarjeta.innerHTML == 24){
            btn_reboot.checked = true;
        }
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0]);
        let trasera2 = document.getElementById("trasera" + selecciones[1]);

        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        }else{
            trasera1.style.background = "#572727";
            trasera2.style.background = "#572727";
        }
    }, 1000);
}