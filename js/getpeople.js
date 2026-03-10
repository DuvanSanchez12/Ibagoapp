window.initPeople = async function () {

const API_URL = "http://127.0.0.1:8000/api/getpeople"
const personasList = document.getElementById("personasList")


try {
  const response = await fetch(API_URL)
  const object = await response.json()

  personasList.innerHTML = "";
    object.data.forEach((persona) => {
      
    const card = document.createElement("div");
    card.className = "card mb-3 w-75 mx-auto shadow-sm border-0 rounded-3";

    card.innerHTML = `
  <div class="card-body border-top border-2  d-flex flex-column align-items-start">
    <h5 class="card-title fw-bold mb-1 text-primary">${persona.nombre}</h5>
    <p class="card-text text-muted mb-0">
      <i class="bi bi-envelope"></i> ${persona.correo}
    </p>
  </div>
`;

    personasList.appendChild(card);
  });
} catch (error) {
  console.log("Error en getpeople", error)
}
}