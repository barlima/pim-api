import { RoundsService } from "./rounds.service";
import { Get, Controller, Body, Param } from '@nestjs/common';
import { Round } from "./round.interface";
import { Language } from "./language.enum";

@Controller('/:language/rounds')
export class RoundsController {
  constructor(private readonly roundsService: RoundsService) {}

  @Get()
  getRounds(
    @Body('number') numberOfRounds: number,
    @Param('language') language: Language,
  ): Round[] {
    return this.roundsService.getRounds(numberOfRounds, language);
  }
}