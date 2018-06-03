import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoalPayoutTier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    goal_id: number;

    @Column('int')
    tier_id: number;

    @Column('int')
    payout_id: number;
}