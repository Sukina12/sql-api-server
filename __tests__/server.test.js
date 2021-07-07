'use strict';
const server = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server.app);

describe('API Server', () => {
  describe('Check The Routes Status When', () => {
    it('Bad Route 404', async () => {
      let route = '/api/v1/foo';
      let response = await mockRequest.get(route);
      expect(response.status).toEqual(404);
    });
    it('Bad Method 404', async () => {
      let route = '/api/v1/food';
      let response = await mockRequest.delete(route);
      expect(response.status).toEqual(404);
    });
    it('clothesRoute 200', async () => {
      let route = '/api/v1/clothes';
      let response = await mockRequest.get(route);
      expect(response.status).toEqual(200);
    });
    it('foodRoute 200', async () => {
      let route = '/api/v1/food';
      let response = await mockRequest.get(route);
      expect(response.status).toEqual(200);
    });

  });

  describe('Status and returned data', () => {
    let id = 'c702ef00-fd1e-4a98-a5a4-7b0f5a7df359';
    describe('/clothes', () => {
      it('GET record', async () => {
        let route = '/api/v1/clothes';
        let response = await mockRequest.get(route);
        expect(response.status).toEqual(200);
      });


      it('POST new record', async () => {
        let route = '/api/v1/clothes';
        let clothes = {
          name: 'T-Shirt',
          quantity: 5,
        };
        let response = await mockRequest.post(route).send(clothes);
        expect(response.body.name).toEqual('T-Shirt');
        expect(response.body.quantity).toEqual('5');
        id = response.body._id;
      });

    });

    describe('/food', () => {
      it('GET record', async () => {
        let route = '/api/v1/food';
        let response = await mockRequest.get(route);
        expect(response.status).toEqual(200);
      });


      it('POST new record', async () => {
        let route = '/api/v1/food';
        let food = {
          name: 'Burger',
          quantity: 5,
        };
        let response = await mockRequest.post(route).send(food);
        expect(response.body.name).toEqual('Burger');
        expect(response.body.quantity).toEqual('5');
        id = response.body._id;
      });

    });


  });
});