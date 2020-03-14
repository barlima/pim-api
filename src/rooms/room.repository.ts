import { Repository, EntityRepository } from 'typeorm';
import { Room } from './room.entity';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {
  async createRoom(): Promise<Room> {
    const room = new Room();
    room.name = uuid();

    try {
      await room.save();
    } catch (error) {
      throw new InternalServerErrorException()
    }

    return room;
  }

  async getRoomByName(name: string): Promise<Room> {
    const room = await this.findOne({ name });

    if (!room) {
      throw new NotFoundException('Room does not exist');
    }

    return room;
  }
}