/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var Num1;
var Num2;
var Suma;

Num1= parseInt(document.getElementById('numeroUno').value);
Num2= parseInt(document.getElementById('numeroDos').value);

suma= num1 + num2;
alert("La suma es " + suma);
}

