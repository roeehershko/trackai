import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoalPayoutCountry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    goal_id: number;

    @Column('int')
    country_id: number;

    @Column('int')
    payout_id: number;
}