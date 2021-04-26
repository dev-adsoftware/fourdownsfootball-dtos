import {
  IsDivisibleBy,
  IsIn,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Event } from '../../../event.dto';

export class PlayerCreatedEvent extends Event {
  @IsString()
  source = 'unknown';

  @IsString()
  type = 'player.created';

  @IsString()
  version = '1';

  @IsString()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsIn(['', 'Sr.', 'Jr.', 'I', 'II', 'II', 'IV'])
  suffix: string;

  @IsNumber()
  @IsDivisibleBy(1)
  @Min(0)
  @Max(100)
  kicking: number;
}
