import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { ResultEvent } from './result-event.dto';

export class PlayResultEvent extends ResultEvent {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'play.result';

  @IsString()
  version = '1';

  @IsNumber()
  @IsOptional()
  kickDistance?: number;

  @IsBoolean()
  @IsOptional()
  returned?: boolean;

  @IsNumber()
  @IsOptional()
  returnDistance?: number;
}
