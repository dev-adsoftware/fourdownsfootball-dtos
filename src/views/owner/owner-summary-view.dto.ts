import 'reflect-metadata';
import {
  IsNumberString,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Dto } from '../../dto';
import { OwnerAttributes } from '../../attributes/owner.attributes.dto';

export class OwnerSummaryView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsObject()
  @ValidateNested()
  @Type(() => OwnerAttributes)
  attributes: OwnerAttributes;
}
