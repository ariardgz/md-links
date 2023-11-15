const { isUtf8 } = require('buffer');
const fs = require('fs');
const path = require('path');


const {
  findLinks,
  validatedLinks
} = require('./functions.js')

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
        if(content !== ''){
          const arrayObjects = findLinks(content, isAbs);

          if(arrayObjects !== '' && options == true){
            resolve(validatedLinks(arrayObjects, isAbs));

          } else if (arrayObjects !== '' && options == false){
            resolve(arrayObjects);
          }

           
          


        } else {
          reject('The file is empty');
        }


      } else {
        reject('The file is not .md');
      }



      
      
      
     
      
    } else {
      //Si no existe la ruta rechaza la promesa
      reject('The route no exist');
    }
    

  })

}
module.exports = {
  mdLinks,
};
// Funciones mdlinks que llamara las microfunciones
// de app.js