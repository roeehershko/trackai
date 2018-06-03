import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Goal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    offer_id: number;

    @Column('int')
    payout_id: number;

    @Column()
    title: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    created: Date;
}