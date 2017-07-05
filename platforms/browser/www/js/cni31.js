var app = {
	inicio: function() {
		var Acceso = document.querySelector('#boton');
		var Boton0 = document.querySelector('#Boton0');
		var Boton1 = document.querySelector('#Boton1');
		var Boton2 = document.querySelector('#Boton2');
		var Boton3 = document.querySelector('#Boton2');
		var Boton4 = document.querySelector('#Boton2');
		var Volver1 = document.querySelector('#volver1');
		var Volver2 = document.querySelector('#volver1');
		
		Acceso.addEventListener('click', this.presentacion, false);
		Boton0.addEventListener('click', this.resena, false);
		Boton1.addEventListener('click', this.MisionVision, false);
		Boton2.addEventListener('click', this.boton1, false);
		Boton3.addEventListener('click', this.boton2, false);
		volver1.addEventListener('click', this.volver1, false);
		volver2.addEventListener('click', this.volver2, false);
	},

	presentacion: function() {
		document.querySelector("#presentacion").style.display = 'none';
		document.querySelector("#principal").style.display = 'block';
	},

	resena: function() {
		document.body.className='conFondo';
		document.querySelector("#principal").style.display = 'none';
		document.querySelector("#resena").style.display = 'block';
	},

	MisionVision: function() {
		document.body.className='conFondo';
		document.querySelector("#principal").style.display = 'none';
		document.querySelector("#MisionVision").style.display = 'block';
	},

	volver1: function() {
		document.querySelector("#principal").style.display = 'block';
		document.querySelector("#resena").style.display = 'none';
	},

	volver2: function() {
		document.querySelector("#principal").style.display = 'block';
		document.querySelector("#MisionVision").style.display = 'none';
	},

	boton1 : function() {
		document.getElementById('dre1').innerHTML = "loko1";
	},

	boton2 : function() {
		document.getElementById('dre1').innerHTML = "loko2";
	},
};

if ('addEventListener' in document){
	document.addEventListener('DOMContentLoaded', function(){
		//FastClick.attach(document.body);
		app.inicio();
	}, false);
}
