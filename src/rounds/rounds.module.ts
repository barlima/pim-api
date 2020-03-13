import { Module } from "@nestjs/common";
import { RoundsController } from "./rounds.controller";
import { RoundsService } from "./rounds.service";

@Module({
  imports: [],
  controllers: [RoundsController],
  providers: [RoundsService],
})
export class RoundsModule {}