async function loadPage(page) {
  try {
    const res = await fetch(`routes/${page}.html`);
    if (!res.ok) throw new Error("Página no encontrada");
    const html = await res.text();
    document.getElementById("app").innerHTML = html;

    if (page === "home") {
      setTimeout(() => {
        window.initMap();
        initMapUI();
      }, 50);
    }
    if (page === "contact") {
      window.initForm()
      window.initPeople()
    }

  } catch (err) {
    document.getElementById("app").innerHTML = "<h2>Error cargando contenido</h2>";
  }
}


function setupRouter() {
  document.querySelectorAll("[data-route]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const route = link.dataset.route;
      window.location.hash = route;
      loadPage(route);
    });
  });
}

// Cargar ruta inicial
window.addEventListener("load", () => {
  setupRouter();

  const hashRoute = window.location.hash.replace("#", "");
  loadPage(hashRoute || "home");
});
