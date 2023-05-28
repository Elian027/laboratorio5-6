"use strict";
//introduccion
console.log("Recibimiento de PC");

console.log("Revision de PC ");

setTimeout(function timeout() {
    console.log("Arreglar componentes necesarios");
}, 5000);

console.log("Entrega de PC");

//Codigo sincrono
function buscar() {

    for (let index = 0; index < 10000000000; index++) 
    {
    }
    return `¡Ya se soluciono el problema!`
}
console.log("Comenzar a desarrollar sitio web")
console.log("Error en la linea 56")
console.log("Buscar error")
const resp = buscar()
console.log(resp)
console.log("Continuar codificando el sitio web");

//Codigo asincrono
function buscar1() {
    console.log(`Ya se soluciono el problema!`)
}

console.log("Comenzar a desarrollar sitio web")
console.log("Error en la linea 56")
console.log("Buscar error")
const data = setTimeout(()=>buscar1(),5000)
console.log("Continuar codificando el sitio web")

//promesa
function obtenerClima(ciudad) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const clima = {
          ciudad: ciudad,
          temperatura: 25,
          descripcion: "Soleado",
        };
  
    
        if (clima) {
          resolve(clima); 
        } else {
          reject("No se pudo obtener el clima."); 
        }
      }, 2000); 
    });
}

const ciudad = "Quito";
  
obtenerClima(ciudad)
.then((clima) => {
      console.log("Datos del clima:", clima);
      console.log("Temperatura en", clima.ciudad, "es", clima.temperatura + "°C");
      console.log("Descripción:", clima.descripcion);
})
.catch((error) => {
      console.log("Error al obtener el clima:", error);
});
  
//async
function cargarImagen(url) {
    return new Promise((resolve, reject) => {
      const imagen = new Image();
  
      imagen.onload = function () {
        resolve(imagen);
      };
  
      imagen.onerror = function () {
        reject(new Error("No se pudo cargar la imagen."));
      };
  
      imagen.src = url;
    });
  }

async function cargarImagenes() {
try {
    const urls = [
        "https://example.com/imagen1.jpg",
        "https://example.com/imagen2.jpg",
        "https://example.com/imagen3.jpg",
    ];
  
    const promesas = urls.map((url) => cargarImagen(url));
    const imagenes = await Promise.all(promesas);
  
    imagenes.forEach((imagen) => {
    console.log("Imagen cargada:", imagen.src);
      });
    } catch (error) {
      console.log("Error al cargar las imágenes:", error);
    }
}
cargarImagenes(); 