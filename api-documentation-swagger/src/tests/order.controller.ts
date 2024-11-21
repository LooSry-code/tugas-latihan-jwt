import request from 'supertest'
import express from 'express';

const app = express();


describe('Order Controller', () => {
  it('should create a new order', async () => {
    const response = await request(app)
      .post('/api/orders')
      .set('Authorization', `Bearer <your_token>`)
      .send({
        grandTotal: 100,
        orderItems: [
          { name: 'Product A', productId: '<product_id>', price: 50, quantity: 1 },
          { name: 'Product B', productId: '<product_id>', price: 50, quantity: 1 },
        ],
        status: 'pending'
      });

    expect(response.status).toBe(201);
    expect(response.body.data).toHaveProperty('grandTotal', 100);
  });

  it('should retrieve order history for a user', async () => {
    const response = await request(app)
      .get('/api/orders/history')
      .set('Authorization', `Bearer <your_token>`);

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
  });
});
