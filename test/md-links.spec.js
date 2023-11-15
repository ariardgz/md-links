const { mdLinks } = require('../index.js');
const { findLinks } = require('../functions.js');




describe('mdLinks', () => {

  it('should return a promise', () => {
    return mdLinks()
    .then(()=>{
      expect(mdLinks).toBe(typeof 'promise')
    })
    .catch((error) => {
      {error};
    });
  });

  it('should reject path when not exist', () => {
    return mdLinks('/aria/lab/notexist.md').catch((error) => {
      expect(error).toBe('The route no exist');
    })
  });

  it('should resolve path when is absolute', () =>{
    const path = 'C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/ejemplo1.md';
    const links = [
      
        {
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          file: path
        }
    ]
    expect(mdLinks(path, {validate: false})).resolves.toEqual(links);
          
    });

    it('should resolve when the path is relative', () =>{
      const path = 'examples/ejemplo1.md';
      const links = [
        
          {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            file: 'C:\\Users\\ariad\\Documents\\LABORATORIA\\MD-LINKS\\md-links\\examples\\ejemplo1.md'
          }
      ]
      expect(mdLinks(path, {validate: true})).resolves.toEqual(links);
            
      });


});
describe('Read links', ()=>{
  it('should return all the link of the path', () =>{
    const content = 'Hola soy un archivo .md con texto [Markdown](https://es.wikipedia.org/wiki/Markdown)';
    const path = 'C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/ejemplo1.md'
    const links = [
      
        {
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          file: path
        }
    ]
    expect(findLinks(content, path)).toEqual(links);
          
    });
  

})
