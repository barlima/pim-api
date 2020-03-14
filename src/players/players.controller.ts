import { Controller, Post, Param, Body, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { Player } from './player.entity';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('rooms/:room/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}
  
  @Post()
  @UsePipes(ValidationPipe)
  createPlayer(
    @Param('room') room: string,
    @Body() createPlayerDto: CreatePlayerDto,
  ): Promise<Player> {
    return this.playersService.createPlayer(createPlayerDto, room);
  }

  @Get()
  getPlayers(
    @Param('room') room: string,
  ): Promise<Player[]> {
    return this.playersService.getPlayers(room);
  }
}