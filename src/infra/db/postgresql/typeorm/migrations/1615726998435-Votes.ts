import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class Votes1615726998435 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'votes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'user_id',
            type: 'uuid'
          },
          {
            name: 'card_id',
            type: 'uuid'
          },
          {
            name: 'user_stories_id',
            type: 'uuid'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )

    await queryRunner.createForeignKey(
      'votes',
      new TableForeignKey({
        name: 'VoteUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    )

    await queryRunner.createForeignKey(
      'votes',
      new TableForeignKey({
        name: 'VoteCard',
        columnNames: ['card_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cards',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    )

    await queryRunner.createForeignKey(
      'votes',
      new TableForeignKey({
        name: 'VoteUserStories',
        columnNames: ['user_stories_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_stories',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('votes', 'VoteUser')
    await queryRunner.dropForeignKey('votes', 'VoteCard')
    await queryRunner.dropForeignKey('votes', 'VoteUserStories')

    await queryRunner.dropTable('votes')
  }
}
