import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    offer_id: number;

    @Column()
    title: string;

    @Column()
    payout: string;
}