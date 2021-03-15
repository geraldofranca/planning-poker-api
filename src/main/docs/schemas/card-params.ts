export const CardParams = {
  type: 'object',
  properties: {
    value: {
      type: 'integer'
    }
  },
  required: ['value']
}

export const CardDeleteParams = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    }
  },
  required: ['id']
}

export const CardResult = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    value: {
      type: 'integer'
    },
    created_at: {
      type: 'date-time'
    },
    updated_at: {
      type: 'date-time'
    }
  }
}
