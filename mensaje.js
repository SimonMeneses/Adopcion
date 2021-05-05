let msj1 = [
  "./img/perfil.png",
  "Mario Dolores",
  "4:36",
  "¡Hola! claro, podemos acordar un lugar y hora para que conozcas...",
];

document.querySelector("#img_msj1").setAttribute("src", msj1[0]);
document.querySelector("#nombre_msj1").innerHTML = msj1[1];
document.querySelector("#hora_msj1").innerHTML = msj1[2];
document.querySelector("#descripcion_msj1").innerHTML = msj1[3];

// let msj2 =['./img/perfil.png', 'Juan Ramirez','7:42','Hola, claro, tiene todas las vacunas y esta desparacitado']

// document.querySelector("#img_msj2").setAttribute("src", msj2[0]);
// document.querySelector("#nombre_msj2").innerHTML = msj2[1];
// document.querySelector("#hora_msj2").innerHTML = msj2[2];
// document.querySelector("#descripcion_msj2").innerHTML = msj2[3];

// let msj3 =['./img/perfil.png', 'Laura Jaramillo','8:52','ya tengo todos los documentos listos para el tramite']

// document.querySelector("#img_msj3").setAttribute("src", msj3[0]);
// document.querySelector("#nombre_msj3").innerHTML = msj3[1];
// document.querySelector("#hora_msj3").innerHTML = msj3[2];
// document.querySelector("#descripcion_msj3").innerHTML = msj3[3];

const detalles = () => {
  document.querySelector("main").style.display = "none";
  document.querySelector("footer").style.display = "none";
  document.querySelector("#btn_back").style.display = "flex";

  const n = document.querySelector(".body-div");

//   n.innerHTML = `


//         <div>
//             <h1>HOLA</h1>
//         </div>

//         `


};

let vector = document.querySelector("#vector");
vector.addEventListener("click", detalles);

let back = document.querySelector("#btn_back");
back.addEventListener("click", function (){
    document.querySelector("main").style.display = 'block';
    document.querySelector("footer").style.display = 'block';
    document.querySelector("#btn_back").style.display = "none";
})


