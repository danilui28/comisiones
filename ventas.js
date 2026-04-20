const ventasBase = 5;

function calcularComision(numeroVentas, precioProducto){
   let comision = 0;

   if(numeroVentas > ventasBase){
      let ventasExtras = numeroVentas - ventasBase;
      comision = ventasExtras * (precioProducto * 0.1)
   }

   return comision
}

function validarVentas(){
   let numeroVentas = recuperarTexto("txtVentas")

   if(numeroVentas.length > 5){
      alert("Maximo 5 caracteres")
      return false;
   } else {
      return true;
   }
}

function calcular(){

   if(validarVentas()==false){
      return;
   }

   let sueldoBase = parseFloat(recuperarTexto("txtSueldoBase"));
   let numeroVentas = parseFloat(recuperarTexto("txtVentas"));
   let precioProducto = parseFloat(recuperarTexto("txtPrecio"));

   let comision = calcularComision(numeroVentas, precioProducto)

   let total = sueldoBase + comision;

   let spSueldoBase = document.getElementById("spSueldoBase");
   let spComision = document.getElementById("spComision");
   let spTotal = document.getElementById("spTotal");

   spSueldoBase.textContent = sueldoBase;
   spComision.textContent = comision;
   spTotal.textContent = total;
}