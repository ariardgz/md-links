
const axios = require('axios');
// Leer y obtener los links
const findLinks = (content, isAbs) => {
    let arrayObjects = [];
    if(content !== undefined){
     
      const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
      let arrayLinks = [...content.matchAll(regExp)]; // spread operator
  
    for (let i = 0; i < arrayLinks.length; i++) {
        arrayObjects.push({
            href: arrayLinks[i][2],
            text: arrayLinks[i][1],
            file: isAbs,
        });
    }
    
      
    }
   
      return arrayObjects
    
  };

// Validar links hito2
const validatedLinks = (arr , inputPath) => {
    let arrayPromises = [];
    for (let i = 0; i < arr.length; i++) {
        const object = arr[i];
        const links = axios.get(object.href)
            .then((res) => ({
                href: res.config.url,
                text: object.text,
                file: inputPath,
                status: res.status,
                message: 'ok',
            }))
            .catch((error) => {
                // console.log(error)
                if ('response' in error) {
                    return {
                        href: object.href,
                        text: object.text,
                        file: inputPath,
                        status: error.response.status,
                        message: 'fail',
                    };
                }
            });
        arrayPromises.push(links);
    }
    return Promise.all(arrayPromises);
};

module.exports = {
    findLinks,
    validatedLinks
}
