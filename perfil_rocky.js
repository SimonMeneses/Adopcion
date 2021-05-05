import mascotas from "./database/perfil_mascota.js"

let rocky = new mascotas ('perro', 'Rocky', 'Rottweiler', 'Masculino' , '3 meses', './img/iconos/masculino.png', "./img/img_mascotas/Rocky.png" ,  "./img/img_personalidad/cariñoso.png", "./img/img_personalidad/inquieto.png" , "./img/img_personalidad/jugueton.png", "Rocky es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la persona indicada.", "Historia de Rocky", "4140 Parker Rd. Allentown, New Mexico 31134");

document.querySelector("#img_perfil").setAttribute("src" , rocky.img_perfil);
document.querySelector("#nombre_mascota").innerHTML = rocky.nombre_mascota;
document.querySelector("#sexo").innerHTML = rocky.sexo;
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


