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
      200: {
        description: 'Sucesso',
        content: ''
      },
      400: {
        description: 'badRequest'
      },
      404: {
        description: 'notFound'
      },
      500: {
        description: 'serverError'
      }
    }
  },
  get: {
    tags: ['Cards'],
    summary: 'API para retornar as cartas cadastradas',
    description: 'Essa rota é aberta',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/schemas/CardResult'
              }
            }
          }
        }
      },
      400: {
        description: 'badRequest'
      },
      404: {
        description: 'notFound'
      },
      500: {
        description: 'serverError'
      }
    }
  },
  delete: {
    tags: ['Cards'],
    summary: 'API para apagar uma carta',
    description: 'Essa rota é aberta',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/CardDeleteParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: ''
      },
      400: {
        description: 'badRequest'
      },
      404: {
        description: 'notFound'
      },
      500: {
        description: 'serverError'
      }
    }
  }
}
