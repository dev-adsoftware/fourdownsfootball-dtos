import 'reflect-metadata';
import { IsEnum, IsString } from 'class-validator';
import { Event } from '../../../event.dto';
import { RandomPlayerTypes } from '../../../types';

export class RandomCreatedEvent extends Event {
  @IsString()
  source = 'unknown';

  @IsString()
  type = 'random.created';

  @IsString()
  version = '1';

  @IsString()
  id: string;

  @IsString()
  teamId: string;

  @IsEnum(RandomPlayerTypes)
  randomPlayerType: RandomPlayerTypes;
}
