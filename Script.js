$(document).ready(function(){

		var canvas = $(document.getElementById('grilla'));

		var contexto = canvas[0].getContext('2d');

		var miMatriz = new Matriz(12, 12);

		var a = true;

		for (var i = 0; i < 12; i++) {
			for (var j = 0; j < 12; j++) {
				contexto.lineWidth = 1;
				contexto.strokeStyle = 'black';
				contexto.strokeRect(j*50, i*50, 50, 50);
			};
		};

		canvas.click(function(e){
			contexto.lineWidth = 5;
			contexto.strokeStyle = 'black';

			var posicionX = parseInt(e.offsetX/50);

			var posicionY = parseInt(e.offsetY/50);

			miMatriz.insertarValor(posicionX, posicionY, a);

			if (a) {
				contexto.moveTo(posicionX*50, posicionY*50);
				contexto.lineTo(50+(posicionX*50), 50+(posicionY*50));

				contexto.moveTo((posicionX*50)+50, posicionY*50);
				contexto.lineTo(posicionX*50, 50+(posicionY*50));
				a = false;
			}


			else {
				contexto.beginPath();
    			contexto.arc(25+(posicionX*50),25+(posicionY*50), 20, 0, 360, false);
    			a = true;
			}
			

			contexto.stroke();


			}
		);

	});