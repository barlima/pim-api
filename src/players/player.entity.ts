import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Room } from '../rooms/room.entity';

@Entity()
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(type => Room, room => room.players, { eager: false })
  room: Room
  
  @Column()
  roomId: number
}