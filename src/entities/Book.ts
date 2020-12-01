import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    readonly id?: number;

    @Column()
    name?: string;

    @Column()
    author?: string;

    @Column()
    url?: string;

    @Column()
    create_at?: Date;

    @Column()
    update_at?: Date;

}

export default Book;