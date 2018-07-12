function mostrar()
{
//tomo la edad  
	var Edad;
	var Estadocivil;
	Edad= document.getElementById('edad').value;
	Estadocivil=document.getElementById('estadoCivil').value;
	if (Edad < 18 && Estadocivil != "Soltero")
	 {
	 	alert("Es muy pequeño para no ser Soltero");
	 }
	


}//FIN DE LA FUNCIÓN