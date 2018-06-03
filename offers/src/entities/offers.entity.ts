import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Offer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    account_id: number;

    @Column('int')
    network_id: number;

    @Column('int')
    default_url_id: number;

    @Column()
    title: string;

    @Column()
    url: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    created: Date;
}