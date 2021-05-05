

function getData() {

    const form = document.getElementById("formulario")

    form.addEventListener("submit", function (event) {
        event.preventDefault();
    })

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;

    console.log(nombre, apellido, email);
    window.alert("¡Datos actualizados con exito!")

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email);

    // document.getElementById("nombre_nuevo").innerHTML = localStorage.getItem("nombre");
    // document.getElementById("apellido_nuevo").innerHTML = localStorage.getItem("apellido");
    // document.getElementById("email_nuevo").innerHTML = localStorage.getItem("email");

  
}


    // document.getElementById("nombre_nuevo").innerHTML = localStorage.getItem("nombre");
    // document.getElementById("apellido_nuevo").innerHTML = localStorage.getItem("apellido");
    // document.getElementById("email_nuevo").innerHTML = localStorage.getItem("email");

    let nombre = localStorage.getItem("nombre");
    let apellido = localStorage.getItem("apellido");
    let email = localStorage.getItem("email");
    
    
    document.querySelector("#nombre").setAttribute("value", nombre);
    document.querySelector("#apellido").setAttribute("value", apellido);
    document.querySelector("#email").setAttribute("value", email);




