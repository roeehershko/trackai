import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OfferUrl {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    offer_id: number;

    @Column()
    title: string;

    @Column()
    url: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    created: Date;
}