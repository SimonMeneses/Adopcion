import mascotas from "./database/perfil_mascota.js"

let rocky = new mascotas ('perro', 'Rocky', 'Rottweiler', '3 meses', './img/iconos/masculino.png', "./img/img_mascotas/Rocky.png" ,  "./img/img_personalidad/cariñoso.png", "./img/img_personalidad/inquieto.png" , "./img/img_personalidad/jugueton.png", "Rocky es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la persona indicada.", "Historia de Rocky", "4140 Parker Rd. Allentown, New Mexico 31134");

document.querySelector("#img_perfil").setAttribute("src" , rocky.img_perfil);
document.querySelector("#nombre_mascota").innerHTML = rocky.nombre_mascota;
document.querySelector("#img_sexo").setAttribute("src" , rocky.img_sexo);
document.querySelector("#edad").innerHTML = rocky.edad;
document.querySelector("#personalidad1").setAttribute("src" , rocky.personalidad1);
document.querySelector("#personalidad2").setAttribute("src" , rocky.personalidad2);
document.querySelector("#personalidad3").setAttribute("src" , rocky.personalidad3);
document.querySelector("#historia").innerHTML = rocky.historia;
document.querySelector("#descripcion").innerHTML = rocky.descripcion;
document.querySelector("#personalidad1").setAttribute("src" , rocky.personalidad1);
document.querySelector("#raza").innerHTML = rocky.raza;
document.querySelector("#ubicacion").innerHTML = rocky.ubicacion;

let favrocky = localStorage.getItem("favrocky");
let favorito = document.querySelector("#favoritor");


document.addEventListener("DOMContentLoaded", function () {

    if (favrocky != "rocky"){
        favorito.setAttribute('src' , "./img/iconos_nav/Guardar.svg");
        console.log("Rocky NO esta en favoritos");
    } else {
        favorito.setAttribute('src' , "./img/iconos_nav/GuardarON.svg");
        console.log("Rocky esta en favoritos");
    
    }
    
  });



document.querySelector("#favoritor").addEventListener("click", () =>{
    let favrocky = localStorage.getItem("favrocky");
    let favorito = document.querySelector("#favoritor");
    if (favrocky != "rocky"){
        favorito.setAttribute('src' , "./img/iconos_nav/GuardarON.svg");
        localStorage.setItem("favrocky", "rocky");
    } else {
        favorito.setAttribute('src' , "./img/iconos_nav/Guardar.svg");
        localStorage.setItem("favrocky", "off");
    }


})



