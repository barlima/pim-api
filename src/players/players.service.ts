import { Injectable } from "@nestjs/common";
import { Player } from "./player.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { PlayerRepository } from "./player.repository";
import { CreatePlayerDto } from "./dto/create-player.dto";
import { RoomRepository } from 'src/rooms/room.repository';
import { Room } from '../rooms/room.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayerRepository)
    private readonly playerRepository: PlayerRepository,

    @InjectRepository(RoomRepository)
    private readonly roomRepository: RoomRepository
  ) {}

  async createPlayer(createPlayerDto: CreatePlayerDto, roomName: string): Promise<Player> {
    const room: Room = await this.roomRepository.getRoomByName(roomName);
    return this.playerRepository.createPlayer(createPlayerDto, room);
  }

  async getPlayers(roomName: string): Promise<Player[]> {
    const room: Room = await this.roomRepository.getRoomByName(roomName);
    return this.playerRepository.find({ roomId: room.id });
  }
}