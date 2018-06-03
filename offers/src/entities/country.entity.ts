import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    iso2: string;
}