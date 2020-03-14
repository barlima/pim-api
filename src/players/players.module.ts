import { Module } from "@nestjs/common";
import { PlayersController } from "./players.controller";
import { PlayersService } from "./players.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlayerRepository } from "./player.repository";
import { RoomRepository } from "src/rooms/room.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerRepository, RoomRepository]),
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}