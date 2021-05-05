
/* agregando la opacidad segun la categoria seleccionada por el usuario*/
document.querySelector("#categoria-perro").addEventListener('click', e => {
    document.querySelector("#categoria-gato").classList.add('opacidad');
    document.querySelector("#categoria-perro").classList.remove('opacidad');
    document.querySelector("#img-home-1").setAttribute("src", "./img/img_mascotas/card_chester.png");
    // document.querySelector("#perro-img1").setAttribute("href", "./perfil_mascota.html");
    document.querySelector("#img-home-2").setAttribute("src", "./img/img_mascotas/card_papi.png");
    document.querySelector("#img-home-3").setAttribute("src", "./img/img_mascotas/card_rocky.png");
    document.querySelector("#img-home-4").setAttribute("src", "./img/img_mascotas/card_pelusa.png");
})

document.querySelector("#categoria-gato").addEventListener('click', e => {
    document.querySelector("#categoria-perro").classList.add('opacidad');
    document.querySelector("#categoria-gato").classList.remove('opacidad');
    document.querySelector("#img-home-1").setAttribute("src", "./img/img_mascotas/card_matilde.png");
    document.querySelector("#img-home-2").setAttribute("src", "./img/img_mascotas/card_pelusa_gato.png");
    document.querySelector("#img-home-3").setAttribute("src", "./img/img_mascotas/card_kity.png");
    document.querySelector("#img-home-4").setAttribute("src", "./img/img_mascotas/card_bombom.png");
})


 let perro = document.querySelector("#categoria-perro").value;

let gato = document.querySelector("#categoria-gato").value;

console.log(`si eligio perro es ${perro}, si eligio gato es : ${gato}`);