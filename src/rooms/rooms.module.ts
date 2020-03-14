import { Module } from "@nestjs/common";
import { RoomsController } from './rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomRepository } from './room.repository';
import { RoomsService } from './rooms.service';
import { PlayersModule } from '../players/players.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomRepository]),
    PlayersModule
  ],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}