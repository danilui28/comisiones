const ventasBase = 5;

/* ============================= */
/* VALIDACIÓN GENERAL            */
/* ============================= */

function mostrarError(idInput, mensaje){
    let input = document.getElementById(idInput);

    // Eliminar mensaje anterior si existe
    let errorAnterior = input.nextElementSibling;
    if(errorAnterior && errorAnterior.classList.contains("mensaje-error")){
        errorAnterior.remove();
    }

    // Crear nuevo mensaje
    let spanError = document.createElement("span");
    spanError.className = "mensaje-error";
    spanError.textContent = mensaje;

    // Insertar debajo del input
    input.insertAdjacentElement("afterend", spanError);
}

function limpiarError(idInput){
    let input = document.getElementById(idInput);
    let error = input.nextElementSibling;

    if(error && error.classList.contains("mensaje-error")){
        error.remove();
    }
}

function validarCampo(idInput){

    let valor = document.getElementById(idInput).value.trim();

    limpiarError(idInput);

    if(valor === ""){
        mostrarError(idInput, "Este campo no puede estar vacío");
        return false;
    }

    if(!/^[0-9]+$/.test(valor)){
        mostrarError(idInput, "Solo se permiten números");
        return false;
    }

    if(valor.length > 5){
        mostrarError(idInput, "Máximo 5 dígitos permitidos");
        return false;
    }

    return true;
}

/* ============================= */
/* LÓGICA DE COMISIÓN            */
/* ============================= */

function calcularComision(numeroVentas, precioProducto){
   let comision = 0;

   if(numeroVentas > ventasBase){
      let ventasExtras = numeroVentas - ventasBase;
      comision = ventasExtras * (precioProducto * 0.1);
   }

   return comision;
}

/* ============================= */
/* FUNCIÓN PRINCIPAL             */
/* ============================= */

function calcular(){

   let valido1 = validarCampo("txtSueldoBase");
   let valido2 = validarCampo("txtVentas");
   let valido3 = validarCampo("txtPrecio");

   if(!valido1 || !valido2 || !valido3){
      return;
   }

   let sueldoBase = parseFloat(document.getElementById("txtSueldoBase").value);
   let numeroVentas = parseFloat(document.getElementById("txtVentas").value);
   let precioProducto = parseFloat(document.getElementById("txtPrecio").value);

   let comision = calcularComision(numeroVentas, precioProducto);
   let total = sueldoBase + comision;

   document.getElementById("spSueldoBase").textContent = sueldoBase;
   document.getElementById("spComision").textContent = comision;
   document.getElementById("spTotal").textContent = total;
}