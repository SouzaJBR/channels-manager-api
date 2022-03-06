import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('categories')
export class Category {
    @PrimaryColumn()
        id: string;

    @Column()
        name: string;

    @CreateDateColumn({ name: 'created_at' })
        createdAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
        updatedAt?: Date;

    constructor(props: Omit<Category, 'id'>, id?: string) {
        Object.assign(this, props);

        if(!id)
            this.id = uuid();
    }
}