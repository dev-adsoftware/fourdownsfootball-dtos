import { IsEnum, IsString } from 'class-validator';
import { Event } from '../../../event.dto';
import { CoinFace } from '../../../types';

export class CoinTossResultEvent extends Event {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'cointoss.result';

  @IsString()
  version = '1';

  @IsEnum(CoinFace)
  choice: CoinFace;

  @IsEnum(CoinFace)
  actual: CoinFace;

  @IsString()
  winner: string;
}
