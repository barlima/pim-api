import { EntityRepository, Repository } from 'typeorm';
import { Player } from './player.entity';
import { Room } from '../rooms/room.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';

@EntityRepository(Player)
export class PlayerRepository extends Repository<Player> {
  async createPlayer(createPlayerDto: CreatePlayerDto, room: Room): Promise<Player> {
    const { name } = createPlayerDto;
    const player = new Player();

    player.name = name;
    player.room = room;

    try {
      player.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return player;
  }
}