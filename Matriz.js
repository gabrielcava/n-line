function Matriz(ancho, largo){
	this.miMatriz = new Array(ancho);

	for (var i = 0; i < ancho; i++){
		this.miMatriz[i] = new Array(largo);
	};

	this.insertarValor = function(posicionX, posicionY, valor){
		this.miMatriz[posicionX][posicionY]=valor;
	};

}
