export const cardPath = {
  post: {
    tags: ['Cards'],
    summary: 'API para criar um card',
    description: 'Essa rota é aberta',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/CardParams'
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
