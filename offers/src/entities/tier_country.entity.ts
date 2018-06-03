import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TierCountry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    tier_id: number;

    @Column('int')
    country_id: number;
}