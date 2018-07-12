function mostrar()
{
//tomo la edad  
	var Edad;
	var Estadocivil;
	Edad= document.getElementById('edad').value;
	Estadocivil=document.getElementById('estadoCivil').value;
	if (Edad > 17 && Estadocivil == "Soltero")
	 {
	 	alert("Es soltero y no es menor");
	 }
	


}//FIN DE LA FUNCIÓN