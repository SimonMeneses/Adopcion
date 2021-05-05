


document.addEventListener("DOMContentLoaded", function (event) {

  async function getDataBase() {

    let dato;
    await fetch("./database/mascotas.json").then(response => response.json()).then(data => dato = data);
    console.log(dato.perros[0].personalidad[0]);
    console.log(dato.perros[0]);
    return dato;
  }

  getDataBase()

});



const getDataBase = async () => {
  const data = await fetch("./database/mascotas.json").then(data => database = data);
  return data;

}

