import mascotas from "./database/perfil_mascota.js"

let matilde = new mascotas ('gato', 'Matilde', 'British Shorthair', '6 meses', './img/iconos/femenino.png', "./img/img_mascotas/Matilde.png" ,  "./img/img_personalidad/jugueton.png", "./img/img_personalidad/inquieto.png" , "./img/img_personalidad/tierno.png", "Matilde es la mejor guarda espaldas, siempre esta hay para conversar y recibirá cada día con un fuerte cariño. Fue rescatada y busco una persona que le pueda dar todo el amor que ella necesita.", "Historia de Matilde", "4140 Parker Rd. Allenttown. New Mexico 31134");

document.querySelector("#img_perfil").setAttribute("src" , matilde.img_perfil);
document.querySelector("#nombre_mascota").innerHTML = matilde.nombre_mascota;
document.querySelector("#img_sexo").setAttribute("src" , matilde.img_sexo);
document.querySelector("#edad").innerHTML = matilde.edad;
document.querySelector("#personalidad1").setAttribute("src" , matilde.personalidad1);
document.querySelector("#personalidad2").setAttribute("src" , matilde.personalidad2);
document.querySelector("#personalidad3").setAttribute("src" , matilde.personalidad3);
document.querySelector("#historia").innerHTML = matilde.historia;
document.querySelector("#descripcion").innerHTML = matilde.descripcion;
document.querySelector("#personalidad1").setAttribute("src" , matilde.personalidad1);
document.querySelector("#raza").innerHTML = matilde.raza;
document.querySelector("#ubicacion").innerHTML = matilde.ubicacion;

let favmatilde = localStorage.getItem("favmatilde");
let favorito = document.querySelector("#favoritom");


document.addEventListener("DOMContentLoaded", function () {

    if (favmatilde != "matilde"){
        favorito.setAttribute('src' , "./img/iconos_nav/Guardar.svg");
        console.log("Matilde NO esta en favoritos");
    } else {
        favorito.setAttribute('src' , "./img/iconos_nav/GuardarON.svg");
        console.log("Matilde esta en favoritos");
    
    }
    
  });



document.querySelector("#favoritom").addEventListener("click", () =>{
    let favmatilde = localStorage.getItem("favmatilde");
    let favorito = document.querySelector("#favoritom");
    if (favmatilde != "matilde"){
        favorito.setAttribute('src' , "./img/iconos_nav/GuardarON.svg");
        localStorage.setItem("favmatilde", "matilde");
    } else {
        favorito.setAttribute('src' , "./img/iconos_nav/Guardar.svg");
        localStorage.setItem("favmatilde", "off");
    }


})