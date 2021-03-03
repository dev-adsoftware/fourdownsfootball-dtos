import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';
import { Aggregate } from '../..';

export class GameAggregate extends Aggregate {
  @IsString()
  @Transform(({ value }) => `event|#|game|#|${value}`)
  id: string;
}
