/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Dividendo;
	var Divisor;
	var Resto;
	Dividendo= document.getElementById('numeroDividendo').value;
	Divisor= document.getElementById('numeroDivisor').value;

	Resto= parseInt(Dividendo) % parseInt(Divisor);

	alert("El Resto es " + Resto);

	//El Signo % (Modulo) da el resto de la cuenta.
}
