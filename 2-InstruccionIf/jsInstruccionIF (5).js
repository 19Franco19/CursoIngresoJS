function mostrar()
{
//tomo la edad  
	var Edad;
	Edad= document.getElementById('edad').value;
	if (Edad < 13 || Edad >17) 
	{
		alert("La persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN