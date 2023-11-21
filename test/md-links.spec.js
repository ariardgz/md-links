const { mdLinks } = require('../index.js');
const { findLinks, validatedLinks } = require('../functions.js');




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
    expect(mdLinks(path)).resolves.toEqual(links);
          
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
      expect(mdLinks(path)).resolves.toEqual(links);
            
      });

      it('should return an array with href, text, file, status, message', ()=>{
        const path = 'C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/ejemplo1.md'
        const links = [
          
            {
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown',
              file: path,
              status: 200,
              message: 'ok'
            }
        ]
        expect(mdLinks(path)).resolves.toStrictEqual(expect.anything(links));
        })
      

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

    

}),

describe('Validate links', () => {
  it('should be a function', () =>{
    expect(typeof validatedLinks).toBe('function');
  })

  const arrResponse = [
          
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/ejemplo1.md',
      status: 200,
      message: 'ok'
    }
];
  
  const links = [
    
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/ejemplo1.md'
      }
  ];
  it('should return the status: 200 and message: ok', () =>{
    validatedLinks(links, 'C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/ejemplo1.md').then(((response) => {
      expect(response).toEqual(arrResponse);
    }))
          
    });

    const linksFail = [
      {
        href: 'https://es.wikipedia.org/wiki/Noe.js',
        text: 'Node.js - Wikipedia',
        file: 'C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/linkError.md',
      }
    ];

    const arrResponseFail = [
      {
        href: 'https://es.wikipedia.org/wiki/Noe.js',
        text: 'Node.js - Wikipedia',
        file: 'C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/linkError.md',
        status: 404,
        message: 'fail'
      }
    ]

    it('should return status: 404 and message: fail', () =>{
      validatedLinks(linksFail, 'C:/Users/ariad/Documents/LABORATORIA/MD-LINKS/md-links/examples/linkError.md').then(((response) =>{
        expect(response).toEqual(arrResponseFail);
      }))
    })



    

})

