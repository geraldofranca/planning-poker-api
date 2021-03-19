import { createConnection } from 'typeorm'

createConnection()
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(process.env.APP_PORT, () => console.log('Server running...'))
  })
  .catch(console.error)
