import express from 'express'
const app = express()

app.get('/', (req, res) => {
  const code = 200
  return res.status(code).json({
    code,
    message: 'Hi there! Welcome to the API.'
  })
})

export default app
