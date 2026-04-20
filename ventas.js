const ventasBase = 5;

function calcularComision(numeroVentas, precioProducto){
   let comision = 0;

   if(numeroVentas > ventasBase){
      let ventasExtras = numeroVentas - ventasBase;
      comision = ventasExtras * (precioProducto * 0.1)
   }

   return comision
}

function calcular(){

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