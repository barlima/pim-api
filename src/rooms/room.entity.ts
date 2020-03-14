import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Player } from 'src/players/player.entity';

@Entity()
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Player, player => player.room, { eager: true })
  players: Player[]
}