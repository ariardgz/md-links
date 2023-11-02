const { isUtf8 } = require('buffer');
const fs = require('fs');
const path = require('path');

//const axios = require('axios');
// Determina si la ruta es absoluta
const isPathAbsolute = (inputPath) => path.isAbsolute(inputPath);
// Convertir la ruta relativa en absoluta
const turnIntoAbsolute = (inputPath) => (isPathAbsolute(inputPath) ? inputPath : path.resolve(inputPath));
// identificar si el archivo es .md
const isMarkdown = (inputPath) => path.extname(inputPath);
// Leer el documento 
const readFile = (inputPath) => fs.readFileSync(inputPath, 'utf8', fs.readFile(inputPath, 'utf-8', (err, data) => { 
  if(err) {
    return ('error: ', err);
  } else {
    return data;;
  }}));


//--------------------Identificar si la ruta absoluta es un archivo
const isItFile = (inputPath) => fs.statSync(inputPath).isFile();


const mdLinks = (route, options) =>{
  return new Promise((resolve, reject)=>{
    
    
    //Identifica si la ruta existe
    if(fs.existsSync(route)){
      //reject('The route exists');

      // Identificar si la es absoluta 
      const isAbs = !isPathAbsolute(route) ? turnIntoAbsolute(route) : route;

      //Identificar si es archivo .md

      if(isMarkdown(isAbs) == '.md'){

        //Leer el archivo
        const content = readFile(isAbs);

        //Verficar que no es un archivo vacio
        if(!content== ''){
          

        } else {
          reject('The file is empty');
        }


      }



      
      
      
      //Probar si esa ruta es un archivo o un directory
      // Si es un directorio filtrar los archivos
      
    } else {
      //Si no existe la ruta rechaza la promesa
      reject('The route no exist');
    }
    

  })

}
module.exports = {
  mdLinks
};
// Funciones mdlinks que llamara las microfunciones
// de app.js