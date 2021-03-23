import { IsEnum, IsNumber, IsString } from 'class-validator';
import { CoinFace } from '../../../types';
import { Event } from '../../../event.dto';

export class CoinTossResultEvent extends Event {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'cointoss.result';

  @IsString()
  version = '1';

  @IsEnum(CoinFace)
  actual: CoinFace;

  @IsString()
  winner: string;

  @IsNumber()
  nextSeed: number;
}
