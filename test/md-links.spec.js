const { mdLinks } = require('../index.js');



describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

  /*it('should return a promise', () => {
    expect(mdLinks()).toBe(typeof Promise);
  });*/

  it('should reject path when not exist', () => {
    return mdLinks('/aria/lab/notexist.md').catch((error) => {
      expect(error).toBe('The route no exist');
    })
  });

});
