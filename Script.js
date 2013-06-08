$(document).ready(function(){

		var canvas = $(document.getElementById('grilla'));
		var contexto = canvas[0].getContext('2d');
		
		//var contexto = window.contexto = canvas[0].getContext('2d');
		
		var miMatriz = new Matriz(12, 12);
		var turno = true;

		generarGrilla(contexto, miMatriz.ancho, miMatriz.largo);


		canvas.click(function(e){
			contexto.clearRect(0, 0, 600, 600);

			var posicionX = parseInt(e.offsetX/50);
			var posicionY = parseInt(e.offsetY/50);

			if (miMatriz.validarPosicion(posicionX, posicionY)){
				insertarValorEnMatriz(miMatriz, posicionX, posicionY, turno);
				if (validarGanadorEnMatriz(miMatriz, posicionX, posicionY, turno)){
					setTimeout(function(){alert("GANASTE!");}, 1000);
				};
				turno = !turno;
			};
			generarGrilla(contexto, miMatriz.ancho, miMatriz.largo);
			refrescarGrilla(contexto, miMatriz);
		});

});


function refrescarGrilla(contexto, miMatriz){

	contexto.lineWidth = 5;
	contexto.strokeStyle = 'black';
			
	for (var i = 0; i < miMatriz.ancho; i++) {
		for (var j = 0; j < miMatriz.largo; j++) {

			var posX = i*50
			var posY = j*50

			if (miMatriz.miMatriz[i][j] == "X"){
				DibujarCruz(contexto, posX+10, posY+10, 30);
			}
			else if (miMatriz.miMatriz[i][j] == "O"){
				DibujarCirculo(contexto, posX+25, posY+25, 15);
			}
		};
	};
};

function generarGrilla(contexto, ancho, largo){
	for (var i = 0; i < ancho; i++) {
		for (var j = 0; j < largo; j++) {
			contexto.lineWidth = 1;
			contexto.strokeStyle = 'black';
			contexto.strokeRect(j*50, i*50, 50, 50);
		};
	};
};

function insertarValorEnMatriz(miMatriz, posicionX, posicionY, turno){
	if (turno){
		miMatriz.insertarValor(posicionX, posicionY, "X");
	}
	else{
		miMatriz.insertarValor(posicionX, posicionY, "O");
	};
};

function DibujarCruz(context, posX, posY, tam){
 	context.beginPath();
 	context.moveTo(posX, posY);
 	context.lineTo(posX + tam, posY + tam);
 	context.moveTo(posX + tam, posY);
 	context.lineTo(posX , posY + tam);
 	context.closePath();
    context.stroke();
};

function DibujarCirculo(context, posX, posY, radio){
 	context.beginPath();
 	context.arc(posX,posY, radio, 0, 360, false); 
 	context.closePath(); 
 	context.stroke();
};

function validarGanadorEnMatriz(miMatriz, posicionX, posicionY, turno){
	if (turno){
		return (miMatriz.validarGanador(posicionX, posicionY, "X"));
	}
	else{
		return (miMatriz.validarGanador(posicionX, posicionY, "O"));
	};
};