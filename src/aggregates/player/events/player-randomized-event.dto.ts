import 'reflect-metadata';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Event } from '../../../event.dto';
import { RandomPlayerTypes } from '../../../types/random-player-types.enum';

export class PlayerRandomizedEvent extends Event {
  @IsString()
  source = 'unknown';

  @IsString()
  type = 'player.randomized';

  @IsString()
  version = '1';

  @IsNumber()
  currentSeed: number;

  @IsString()
  teamId: string;

  @IsEnum(RandomPlayerTypes)
  playerType: RandomPlayerTypes;
}
