import { createConnection } from 'typeorm'

createConnection()
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen('3100', () => console.log('Server running...'))
  })
  .catch(console.error)
