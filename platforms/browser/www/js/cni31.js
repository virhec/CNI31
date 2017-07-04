var app = {
	inicio: function() {
		var Acceso = document.querySelector('#boton');
		var Boton0 = document.querySelector('#Boton0');
		var Boton1 = document.querySelector('#Boton1');
		var Boton2 = document.querySelector('#Boton2');
		
		Acceso.addEventListener('click', this.presentacion, false);
		Boton0.addEventListener('click', this.boton0, false);
		Boton1.addEventListener('click', this.boton1, false);
		Boton2.addEventListener('click', this.boton2, false);
	},

	presentacion: function() {
		document.querySelector("#presentacion").style.display = 'none';
		document.querySelector("#principal").style.display = 'block';
	},

	boton0 : function() {
		document.getElementById('dre1').innerHTML = "loko0";
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
		app.inicio();
	}, false);
}
