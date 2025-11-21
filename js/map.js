window.initMap = async function () {
  const ibague = { lat: 4.4389, lng: -75.2322 };

  try {
    const response = await fetch('js/map_style.json');
    const mapStyle = await response.json();

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: ibague,
      styles: mapStyle,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    });

    new google.maps.Marker({
      position: ibague,
      map,
      title: "Ibagué, Tolima",
    });

  } catch (error) {
    console.error("Error cargando el estilo del mapa:", error);
  }
}

function initMapUI() {
  const explorarBtn = document.getElementById("explorarBtn");
  const overlay = document.querySelector(".map-overlay");
  const text = document.querySelector(".map-text");

  if (!explorarBtn) return;

  explorarBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    text.classList.add("hidden");
  });
}
