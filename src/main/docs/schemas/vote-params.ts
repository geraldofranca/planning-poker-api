export type VoteModel = {
  id: string
  user_id: string
  card_id: string
  user_stories_id: string
  created_at: Date
}

export const VoteParams = {
  type: 'object',
  properties: {
    user_id: {
      type: 'string'
    },
    card_id: {
      type: 'string'
    },
    user_stories_id: {
      type: 'string'
    }
  },
  required: ['user_id', 'card_id', 'user_stories_id']
}
