import { IsString } from 'class-validator';
import { Dto } from './dto';

export class Event extends Dto {
  @IsString()
  id: string;

  @IsString()
  date: string;

  @IsString()
  source: string;

  @IsString()
  type: string;

  @IsString()
  version: string;

  @IsString()
  data: string;
}
