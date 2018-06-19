/*

const request = require('request');

module.exports.bootstrap = async function (done) {

  setInterval(
    () => {
      console.log('Enviar datos');

      const objetoRequest = {
        url: 'http://localhost:1337/Usuario',
        form: {
          nombre: 'Adrian',
          apellido: 'Eguez'
        }
      };
      request
        .post(objetoRequest,
          (err, respuesta, body) => {
            console.log('err', err);
            console.log('respuesta', respuesta);
            console.log('body', body);

          })
    }
    , 10000);

  return done();

};
