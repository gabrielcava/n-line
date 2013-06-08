function Matriz(ancho, largo){

	this.ancho = ancho;
	this.largo = largo;

	this.miMatriz = new Array(this.ancho);

	for (i = 0; i < this.ancho; i++){
  		this.miMatriz[i] = new Array(this.largo);
 	};

	this.insertarValor = function(posicionX, posicionY, valor){
		/*Forma chota pero se entiende
 		if (!this.miMatriz[posicionX]){
			this.miMatriz[posicionX] = [];
		};*/
		this.miMatriz[posicionX][posicionY]=valor;

		// Forma no tan piola como habiamos pensado, pero la dijo pablo, que es medio pelotudo... pija
		/*this.miMatriz[posicionX] = this.miMatriz[posicionX] || [];
		this.miMatriz[posicionX][posicionY] = valor;*/
		
		//this.validarGanador(posicionX, posicionY, valor);
	};

	this.validarPosicion = function(posicionX, posicionY){
		return !((this.miMatriz[posicionX][posicionY] == "X") || (this.miMatriz[posicionX][posicionY] == "O"))
	};

	this.validarGanador = function(posicionX, posicionY, valor){
		var direcciones = [];
		var contadorDeValores = [];
		var ganador = false;

		for (var i = 1; i <= 8; i++) {
			direcciones[i] = true;
		};

		for (var i = 1; i <= 4; i++) {
			contadorDeValores[i] = 1;
		}

		for (var i = 1; i <= 5; i++) {
			for (var j = 1; j <= 8; j++) {
				if (direcciones[j]){
					var celdaConjuntaX = i*Math.round(Math.cos(Math.PI*j/4));
					var celdaConjuntaY = i*Math.round(Math.sin(Math.PI*j/4));
					direcciones[j] = (this.miMatriz[(posicionX+celdaConjuntaX)][(posicionY+celdaConjuntaY)] == valor);
					if (direcciones[j] && j <= 4){
						contadorDeValores[j]++;
						ganador = ganador || (contadorDeValores[j] >= 5);
					}
					else if (direcciones[j]){
						contadorDeValores[j-4]++;
						ganador = ganador || (contadorDeValores[j-4] >= 5);
					};
					/*(function(posicionX2, posicionY2, x2, y2){
						setTimeout(function(){
							contexto.fillStyle = 'black';
							contexto.fillRect((posicionX2+x2)*50, (posicionY2+y2)*50, 50, 50);
						}, 200*j*i);
					})(posicionX, posicionY, celdaConjuntaX, celdaConjuntaY)*/
				};
			};
		};

		return ganador;

	}

}
