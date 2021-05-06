import mascotas from "./database/perfil_mascota.js"


/* agregando la opacidad segun la categoria seleccionada por el usuario*/
document.querySelector("#categoria-perro").addEventListener('click', e => {
    document.querySelector("#categoria-gato").classList.add('opacidad');
    document.querySelector("#categoria-perro").classList.remove('opacidad');
    document.querySelector("#img-home-1").setAttribute("src", "./img/img_mascotas/card_chester.png");
    
    document.querySelector("#img-home-2").setAttribute("src", "./img/img_mascotas/card_papi.png");

    document.querySelector("#img-home-3").setAttribute("src", "./img/img_mascotas/card_rocky.png");
    document.querySelector("#a_img3").setAttribute("href", "./perfil_rocky.html");

    document.querySelector("#img-home-4").setAttribute("src", "./img/img_mascotas/card_pelusa.png");

})

document.querySelector("#categoria-gato").addEventListener('click', e => {
    document.querySelector("#categoria-perro").classList.add('opacidad');
    document.querySelector("#categoria-gato").classList.remove('opacidad');
    document.querySelector("#img-home-1").setAttribute("src", "./img/img_mascotas/card_matilde.png");
    document.querySelector("#a_img1").setAttribute("href", "./perfil_matilde.html");

    document.querySelector("#img-home-2").setAttribute("src", "./img/img_mascotas/card_pelusa_gato.png");
    document.querySelector("#img-home-3").setAttribute("src", "./img/img_mascotas/card_kity.png");
    document.querySelector("#img-home-4").setAttribute("src", "./img/img_mascotas/card_bombom.png");
})

if (localStorage.getItem("fmatile")) {
    document.querySelector("#a_img1").setAttribute("href", "./perfil_matilde.html");
    console.log("se agrego a matilde a favoritos");
}

