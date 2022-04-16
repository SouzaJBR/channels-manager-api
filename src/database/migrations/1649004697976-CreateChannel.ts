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
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));

        await queryRunner.createTable(new Table({
            name: 'channels_categories',
            columns: [
                {
                    name: 'channelId',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'categoryId',
                    type: 'uuid',
                    isPrimary: true,
                }
            ],
            foreignKeys: [
                {
                    columnNames: ['categoryId'],
                    referencedTableName: 'categories',
                    referencedColumnNames: ['id']
                },
                {
                    columnNames: ['channelId'],
                    referencedTableName: 'channels',
                    referencedColumnNames: ['id'],
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('channels');
        await queryRunner.dropTable('channels_categories');
    }

}
