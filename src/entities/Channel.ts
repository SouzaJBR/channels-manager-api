import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './Category';

@Entity('channels')
export class Channel {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;

    @Column()
    slug: string;

    @Column()
    number: number;

    @Column()
    logoUrl: string;

    @ManyToMany(() => Category)
    @JoinTable({
        name: 'channels_categories',
        joinColumn: {
            name: 'channelId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'categoryId',
            referencedColumnName: 'id',
        }
    })
    categories: Category[];

    constructor(props: Omit<Channel, 'id'>, id?: string) {
        Object.assign(this, props);
        
        if(!id)
            this.id = uuid();
    }
}