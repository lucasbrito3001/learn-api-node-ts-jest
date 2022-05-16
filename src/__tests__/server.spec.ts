import app from '../app'
import request from 'supertest'

describe('Testing root path', () => {
  test('Testing app', async () => {
    const response = await request(app).get('/')

    expect(response.body).toStrictEqual({
      code: 200,
      message: 'Hi there! Welcome to the API.'
    })
  })
})
