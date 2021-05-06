
let favrocky = localStorage.getItem("favrocky");
let favmatilde = localStorage.getItem("favmatilde");

document.addEventListener("DOMContentLoaded", function () {

    if (favrocky == "rocky"){
        
        document.querySelector("#img-fav-1").setAttribute('src', "./img/img_mascotas/card_rocky.png" );
        document.querySelector("#a_img1f").setAttribute("href", "./perfil_rocky.html" );
        console.log("Rocky esta en favoritos");

    } else {
        console.log("Rocky NO esta en favoritos");
    
    }

    if (favmatilde == "matilde"){
        
        document.querySelector("#img-fav-2").setAttribute('src', "./img/img_mascotas/card_matilde.png" );
        document.querySelector("#a_img2f").setAttribute("href", "./perfil_matilde.html" );
        console.log("Matilde esta en favoritos");

    } else {
        console.log("Matilde NO esta en favoritos");
    
    }
    
  });

