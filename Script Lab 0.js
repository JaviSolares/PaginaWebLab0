function CambiarEstiloLetra() {
	document.getElementById("encabezado").style.fontFamily = "Georgia, Times New Roman, Times, serif";
	document.getElementById("par1").style.fontFamily = "Helvetica, Geneva, Arial, SunSans-Regular, sans-serif";
	document.getElementById("par2").style.fontFamily = "Helvetica, Geneva, Arial, SunSans-Regular, sans-serif";
	document.getElementById("par3").style.fontFamily = "Helvetica, Geneva, Arial, SunSans-Regular, sans-serif";
}

function CambiarColorLetra() {
	document.getElementById("cuerpo").style.color = "red";
}

function CambiarTamañoLetra() {
	document.getElementById("cuerpo").style.fontSize = "40px";
}

function CambiarColorFondo() {
	document.getElementById("cuerpo").style.backgroundColor = "#00FFFF";
}

function OcultarContenido() {
	document.getElementById("cuerpo").style.display = "none";
}