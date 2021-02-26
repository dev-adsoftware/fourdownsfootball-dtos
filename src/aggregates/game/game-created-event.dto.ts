import { IsString } from 'class-validator';
import { Dto } from '../../dto';

export class GameCreatedEvent extends Dto {
  @IsString()
  homeUsername: string;

  @IsString()
  homeTeamId: string;

  @IsString()
  awayUsername: string;

  @IsString()
  awayTeamId: string;
}
