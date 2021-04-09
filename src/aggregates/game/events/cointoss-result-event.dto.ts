import { IsEnum, IsString } from 'class-validator';
import { CoinFace } from '../../../types';
import { ResultEvent } from './result-event.dto';

export class CoinTossResultEvent extends ResultEvent {
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
}
