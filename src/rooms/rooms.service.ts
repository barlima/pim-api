import { Injectable, NotFoundException } from "@nestjs/common";
import { Room } from './room.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { RoomRepository } from './room.repository';
import { DeleteResult } from "typeorm";

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomRepository)
    private readonly roomRepository: RoomRepository
  ) {}
  
  async createRoom(): Promise<Room> {
    return this.roomRepository.createRoom();
  }

  async getRooms(): Promise<Room[]> {
    return this.roomRepository.find();
  }

  async getRoomByName(name: string): Promise<Room> {
    return this.roomRepository.getRoomByName(name);
  }

  async deleteRoomByName(name: string): Promise<void> {
    const result: DeleteResult = await this.roomRepository.delete({ name })

    if (result.affected === 0) {
      throw new NotFoundException('Room not found');
    }
  }
}