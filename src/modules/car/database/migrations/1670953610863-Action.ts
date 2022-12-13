import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Action1670953610863 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'actions',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'occurrence',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'type',
                        type: 'char',
                        length: '1',
                    },
                    {
                        name: 'car_id',
                        type: 'int',
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKCar',
                        referencedTableName: 'cars',
                        referencedColumnNames: ['id'],
                        columnNames: ['car_id'],
                        onDelete: 'NO ACTION',
                        onUpdate: 'NO ACTION',
                    },
                    {
                        name: 'FKUser',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'NO ACTION',
                        onUpdate: 'NO ACTION',
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('actions')
    }
}
