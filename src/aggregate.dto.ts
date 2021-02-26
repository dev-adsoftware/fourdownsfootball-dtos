import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Dto } from './dto';
import { Event } from './event.dto';

export class Aggregate extends Dto {
  @IsString()
  id: string;

  @IsNumber()
  sequence: string;

  @IsDate()
  date: Date;

  @IsBoolean()
  @IsOptional()
  isLocked: boolean;

  @IsNumber()
  @IsOptional()
  ttl: number;

  @ValidateNested()
  event: Event;
}
