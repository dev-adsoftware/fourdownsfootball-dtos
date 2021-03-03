import {
  IsBoolean,
  IsDateString,
  IsInstance,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Dto } from './dto';
import { Event } from './event.dto';

export class Aggregate extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsDateString()
  date: string;

  @IsBoolean()
  @IsOptional()
  isLocked: boolean;

  @IsNumber()
  @IsOptional()
  ttl: number;

  @IsInstance(Event)
  @ValidateNested()
  event: Event;
}
