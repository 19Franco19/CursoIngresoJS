/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Num1;
	var Num2;
	var Suma
	Num1= document.getElementById('numeroUno').value;
	Num2= document.getElementById('numeroDos').value;
	Suma= parseInt(Num1) + parseInt(Num2);
	alert("La Suma es " + Suma);

}

function restar()
{
	var Num1;
	var Num2;
	var Resta;
	Num1= document.getElementById('numeroUno').value;
	Num2= document.getElementById('numeroDos').value;
	Resta= parseInt(Num1) - parseInt(Num2);
	alert("La resta es " + Resta);
}

function multiplicar()
{ 
	var Num1;
	var Num2;
	var Multiplicacion;
	Num1= document.getElementById('numeroUno').value;
	Num2= document.getElementById('numeroDos').value;
	Multiplicacion= parseInt(Num1) * parseInt(Num2);
	alert("La multiplicacion es " + Multiplicacion);
}

function dividir()
{
	var Num1;
	var Num2;
	var Division;
	Num1= document.getElementById('numeroUno').value;
	Num2= document.getElementById('numeroDos').value;
	Division= parseInt(Num1) / parseInt(Num2);
	alert("La division es " + Division);
}

