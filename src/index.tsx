import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import {App} from './App';



createServer({
  models: {
    developer: Model,
  },

  seeds(server) {
    server.db.loadData({
      developers: [
        {
          id: 1,
          name: 'Ricardo Correa',
          age: 31,
          city: 'Ipueiras CE',
          backgroundButtonAreaAtuacao: 'front',
          about: 'Programador focado em resolver soluções',
          createdAt: new Date('2021/05/11 09:00:00'),
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/developers', () => {
      return this.schema.all('developer')
    })

    this.post('/developers', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('developer', data)
    })
  }

})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

