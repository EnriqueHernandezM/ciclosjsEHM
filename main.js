//ejercicio

let diaPromocion = prompt(
  "ingrsa el dia en que te gustaria conocer nuestras promociones 'ingresa cancelar si prefieres continuar'"
);
while (diaPromocion != "cancelar") {
  switch (diaPromocion) {
    case "lunes":
      alert("25% de descuento en toda la tienda fisica");
      break;
    case "martes":
      alert("10% de descuento en electronica, tienda fisica y virtual");
      break;
    case "miercoles":
      alert(
        "10% de descuento en accesorios para celular solo en tienda fisica"
      );
      break;
    case "jueves":
      alert("10% de descuento en servicio tecnico");
      break;
    default:
      alert(
        "oh oh al parecer no tenemos promociones este dia !!por el momento"
      );
      break;
  }
  diaPromocion = prompt(
    "ingrsa el dia en que te gustaria conocer nuestras promociones 'ingresa cancelar si prefieres continuar'"
  );
  if (diaPromocion == "cancelar") {
    alert("gracias por visitarnos");
  }
}
