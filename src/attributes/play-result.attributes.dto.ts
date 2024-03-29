import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Dto } from '../dto';

export class PlayResultAttributes extends Dto {
  @IsString()
  description: string;

  @IsNumber()
  @IsOptional()
  kickDistance?: number;

  @IsBoolean()
  @IsOptional()
  returned?: boolean;

  @IsNumber()
  @IsOptional()
  returnDistance?: number;

  @IsString()
  @IsOptional()
  kickedBy?: string;

  @IsString()
  @IsOptional()
  returnedBy?: string;

  @IsString()
  @IsOptional()
  tackledBy?: string;

  @IsNumber()
  elapsedTime: number;

  @IsBoolean()
  isOutOfBounds: boolean;

  @IsArray()
  @IsOptional()
  staminaReductions?: { id: string; value: number }[];
}
