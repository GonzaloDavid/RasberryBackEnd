const request = require('request');
module.exports.bootstrap = async function (done) {

  setInterval(
    () => {
      console.log('Enviar datos');

      const objetoRequest = {
        url: 'http://localhost:1338/Pulsacion',
        form: {
          nombre: 'Lolita',
          edad: '15'
         // usuarioIdFK: 'como estas'// USEN EL SUYO
        }
      };
      request
        .post(objetoRequest)
    }
    , 10000);

  return done();

};
