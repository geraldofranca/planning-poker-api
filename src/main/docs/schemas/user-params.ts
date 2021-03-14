export const UserParams = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    }
  },
  required: ['name', 'email']
}
