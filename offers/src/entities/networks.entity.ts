import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Network {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    default_offer_id: number;

    @Column()
    title: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    created: Date;
}