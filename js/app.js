console.log("JS cargado");
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();  // evita el GET automático

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    fetch("http://127.0.0.1:8000/registrar/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            correo: correo
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log("Respuesta:", data);
            alert("Usuario registrado correctamente");
        })
        .catch(err => console.log("Error:", err));
});
