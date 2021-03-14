import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Column
} from 'typeorm'
import Card from './card'
import User from './user'
import UserStories from './user-stories'

@Entity('votes')
class Vote {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  card_id: string

  @ManyToOne(() => Card)
  @JoinColumn({ name: 'card_id' })
  card: Card

  @Column()
  user_stories_id: string

  @ManyToOne(() => UserStories)
  @JoinColumn({ name: 'user_stories_id' })
  userStories: UserStories

  @CreateDateColumn()
  created_at: Date
}

export default Vote
