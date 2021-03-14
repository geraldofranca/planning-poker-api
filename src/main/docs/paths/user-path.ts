export const userPath = {
  post: {
    tags: ['Users'],
    summary: 'API para criar um usuário',
    description: 'Essa rota é aberta',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/UserParams'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Sucesso',
        content: ''
      }
    }
  }
}
