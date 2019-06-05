var operaciona;
var operacionb;
var operacion;

function init(){


    //variable
    var resultado = document.getElementById("resultado");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var dividir = document.getElementById("dividir");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var multiplicacion=document.getElementById("multiplicacion");
    var ocho = document.getElementById("ocho");
    var nueve= document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var igual = document.getElementById("igual");
    var clear = document.getElementById("clear");
    var resta = document.getElementById("resta");


    //Eventos

    uno.onclick = function(_e)
    {

        resultado.textContent = resultado.textContent + "1";

    }
    dos.onclick = function(_e)
    {
      resultado.textContent = resultado.textContent + "2";
    
    }

    tres.onclick = function(_e)
    {
      resultado.textContent = resultado.textContent + "3";

    }
    cuatro.onclick = function(_e)
    {
      resultado.textContent = resultado.textContent + "4";

    }
    cinco.onclick = function(_e)
    {
      resultado.textContent = resultado.textContent + "5";

    }
    seis.onclick = function(_e)
    {
      resultado.textContent = resultado.textContent + "6";

    }
    siete.onclick = function(_e)
    {
      resultado.textContent = resultado.textContent + "7";

    }
    ocho.onclick = function(_e)
    {
      resultado.textContent = resultado.textContent + "8";

    }
    nueve.onclick = function(_e)
    {
      resultado.textContent = resultado.textContent + "9";

    }
    
    cero.onclick = function(_e)
    {
      resultado.textContent = resultado.textContent + "0";

    }


   clear.onclick = function(_e)

   {

     cleaner();
   }

 
    suma.onclick = function(_e)
    {
      operaciona = resultado.textContent;
      operacion = "+";
      limpiar();

    }
    resta.onclick = function(_e)
    {
      operaciona = resultado.textContent;
      operacion = "-";
      limpiar();
    }
    
    multiplicacion.onclick = function(_e)
    {
      operaciona = resultado.textContent;
      operacion = "*";
      limpiar();
    }
    dividir.onclick = function(_e)
    {
      operaciona = resultado.textContent;
      operacion = "/";
      limpiar();
    }

    igual.onclick = function(_e)
    {
      operacionb=resultado.textContent;
      resolver();
    }
    
}

function limpiar()
{
  resultado.textContent = "";
}

function cleaner()
{

  resultado.textContent = "";
 operaciona= 0;
 operacionb = 0;
 operacion = "";

}



function resolver()
{
  var res=0;
switch (operacion)
{
  case "+":
         
      res = parseFloat(operaciona) + parseFloat(operacionb);
      break;
      
  case "-":
    res = parseFloat(operaciona) - parseFloat(operacionb);
      break;

  case "*":
      res = parseFloat(operaciona) * parseFloat(operacionb);
    break;

  case "/":
        res = parseFloat(operaciona) / parseFloat(operacionb);
break;

}
cleaner();
  resultado.textContent = res;

}



    


