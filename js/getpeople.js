window.initPeople = async function () {

const API_URL = "http://127.0.0.1:8000/api/getpeople"
const personasList = document.getElementById("personasList")


try {
  const response = await fetch(API_URL)
  const object = await response.json()

  personasList.innerHTML = "";
    object.data.forEach((persona) => {
      
    const card = document.createElement("div");
    card.className = "card mb-3 border-0 w-50 mx-auto shadow-sm";

    card.innerHTML = `
    
      <h1>${persona.nombre}</h1>
    `;

    personasList.appendChild(card);
  });
} catch (error) {
  console.log("Error en getpeople", error)
}
}