const { mdLinks } = require('./index.js');

mdLinks('examples/ejemplo1.md', true).then((response)=>{
    console.log(response);
})
.catch((error)=> {
    console.log(error);
})

// C:\Users\ariad\Documents\LABORATORIA\MD-LINKS\md-links\examples\ejemplo1.md 
// C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/ejemplo1.md 