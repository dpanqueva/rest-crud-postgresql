import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {

    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar', {unique: true,})
    name: string;

    @Column('text')
    description: string;
}