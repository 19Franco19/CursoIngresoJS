function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom=Math.floor(Math.random() * 10) + 1; 
	if (numeroRandom >= 9) 
	{
		alert("Su nota es " + numeroRandom + ".Excelente");
	}
	else if (numeroRandom >=4 && numeroRandom < 9) 
	{
		alert("Su nota es " + numeroRandom + ".Aprobo");
	}
	else
	{
		alert("Su nota es" + numeroRandom + ".Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN