import { Get, Post, Controller, Body, Param, Delete } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.entity';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  getRooms(): Promise<Room[]> {
    return this.roomsService.getRooms();
  }

  @Get('/:name')
  getRoomByName(
    @Param('name') name: string
  ): Promise<Room> {
    return this.roomsService.getRoomByName(name);
  }

  @Post()
  createRoom(): Promise<Room> {
    return this.roomsService.createRoom();
  }

  @Delete('/:name')
  deleteRoom(
    @Param('name') name: string
  ): void {
    this.roomsService.deleteRoomByName(name);
  }
}