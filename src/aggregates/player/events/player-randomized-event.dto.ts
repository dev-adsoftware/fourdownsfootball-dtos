import 'reflect-metadata';
import { IsEnum, IsString } from 'class-validator';
import { Event } from '../../../event.dto';
import { RandomPlayerTypes } from '../../../types';

export class PlayerRandomizedEvent extends Event {
  @IsString()
  source = 'unknown';

  @IsString()
  type = 'player.randomized';

  @IsString()
  version = '1';

  @IsString()
  id: string;

  @IsEnum(RandomPlayerTypes)
  playerType: RandomPlayerTypes;
}
