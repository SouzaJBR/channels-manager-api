import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateChannel1649004697976 implements MigrationInterface {
    name = 'CreateChannel1649004697976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'channels',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                },
                {
                    name: 'slug',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                },
                {
                    name: 'number',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'logoUrl',
                    type: 'varchar',
                    length: '256',
                },
                {
                    name: 'categoryId',
                    type: 'uuid',
                    isNullable: false
                }
            ]
        }));

        await queryRunner.createForeignKey("channels", new TableForeignKey({
            columnNames: ['categoryId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('channels');
    }

}
