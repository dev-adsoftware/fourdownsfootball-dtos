import { IsNumber } from 'class-validator';
import { Event } from '../../../event.dto';

export class ResultEvent extends Event {
  @IsNumber()
  nextSeed: number;
}
