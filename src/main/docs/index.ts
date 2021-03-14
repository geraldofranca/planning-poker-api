import { userPath } from './paths/user-path'
import { cardPath } from './paths/card-path'
import { UserParams } from './schemas/user-params'
import { CardParams } from './schemas/card-params'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Planning Poker API',
    description: 'API de planning poker integrado com RabbitMQ',
    version: '1.0.0',
    contact: {
      name: 'Geraldo França',
      email: 'geraldo.pereira.franca@gmail.com',
      url: 'https://www.linkedin.com/in/geraldo-franca/'
    }
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Users',
    description: 'APIs relacionadas a usuário'
  }, {
    name: 'Cards',
    description: 'APIs relacionadas as cartas'
  },{
    name: 'User Stories',
    description: 'APIs relacionadas a história de usuário'
  }],
  paths: {
    '/users': userPath,
    '/cards': cardPath
  },
  schemas: {
    UserParams,
    CardParams
  }
}
