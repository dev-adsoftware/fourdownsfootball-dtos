import 'reflect-metadata';
import { IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ResultEvent } from './result-event.dto';
import { PlayResultAttributes } from '../../..';

export class PlayResultEvent extends ResultEvent {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'play.result';

  @IsString()
  version = '1';

  @IsObject()
  @ValidateNested()
  @Type(() => PlayResultAttributes)
  attributes: PlayResultAttributes;
}
