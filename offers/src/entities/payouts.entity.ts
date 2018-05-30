import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}