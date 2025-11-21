window.initForm = function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Evita el envío tradicional del formulario

      const API_URL = "http://127.0.0.1:8000/api/contact"; // URL de tu API de FastAPI
      const form = event.target;
      const outputMessage = document.getElementById("mensajeRespuesta");

      // Recopila los datos del formulario
      const data = {
        nombre: form.nombre.value,
        correo: form.correo.value,
      };

      outputMessage.textContent = "Enviando...";

      try {
        // Uso de FETCH para enviar la solicitud POST
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Convierte el objeto JS a una cadena JSON
        });

        const result = await response.json();

        if (response.ok) {
          // Éxito: código 200-299
          outputMessage.textContent = `✅ Éxito: ${result.mensaje}`;
          form.reset(); // Limpia el formulario
        } else {
          // Error del servidor o validación
          outputMessage.textContent = `❌ Error al enviar: ${
            result.detail || result.mensaje
          }`;
        }
      } catch (error) {
        // Error de red, CORS (si no se configuró bien), o problema de fetch
        outputMessage.textContent = `⚠️ Error de conexión. Verifica que la API esté activa. Detalles: ${error.message}`;
        console.error("Error en fetch:", error);
      }
    });
};
