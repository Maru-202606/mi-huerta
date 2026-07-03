document.addEventListener("DOMContentLoaded", function () {
  console.log("El DOM está listo y el script se ha cargado.");

  // 1. elementos principales
  const formulario = document.getElementById("formulario-compra");
  const seccionContacto = document.getElementById("contacto");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita recarga de página

      // 2. Limpia completamente el contenido de la sección para evitar solapamientos
      // Esto elimina el formulario y el título viejo, dejando espacio limpio
      seccionContacto.innerHTML = "";

      // 3. Crea el mensaje de confirmación desde cero para asegurar que sea lo único que se ve
      const nuevoMensaje = document.createElement("div");
      nuevoMensaje.id = "mensaje-confirmacion";
      nuevoMensaje.textContent =
        "Te enviamos la información, pronto nos pondremos en contacto.";

      // 4. estilos directos (fuerza visibilidad absoluta)
      nuevoMensaje.style.display = "block";
      nuevoMensaje.style.padding = "40px";
      nuevoMensaje.style.marginTop = "20px";
      nuevoMensaje.style.textAlign = "center";
      nuevoMensaje.style.backgroundColor = "#d4edda";
      nuevoMensaje.style.color = "#155724";
      nuevoMensaje.style.border = "2px solid #c3e6cb";
      nuevoMensaje.style.borderRadius = "10px";
      nuevoMensaje.style.fontWeight = "bold";
      nuevoMensaje.style.fontSize = "1.2rem";

      // 5. Inserta el mensaje en la sección vacía
      seccionContacto.appendChild(nuevoMensaje);

      console.log(
        "Mensaje de confirmación aplicado, formulario eliminado del DOM.",
      );
    });
  } else {
    console.error("No se encontró el formulario con ID 'formulario-compra'.");
  }
});
