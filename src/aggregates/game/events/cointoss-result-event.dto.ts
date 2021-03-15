import { IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class CoinTossResultEvent extends Event {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'cointoss.result';

  @IsString()
  version = '1';

  @IsString()
  winner: string;
}
