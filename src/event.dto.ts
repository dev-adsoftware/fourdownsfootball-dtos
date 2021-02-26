import { IsJSON, IsString } from 'class-validator';
import { Dto } from './dto';

export class Event extends Dto {
  @IsString()
  source: string;

  @IsString()
  type: string;

  @IsString()
  version: string;

  @IsJSON()
  data: string;
}
