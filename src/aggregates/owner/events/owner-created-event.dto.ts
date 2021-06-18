import 'reflect-metadata';
import { IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Event } from '../../../event.dto';
import { OwnerAttributes } from '../../../attributes';

export class OwnerCreatedEvent extends Event {
  @IsString()
  source = 'unknown';

  @IsString()
  type = 'owner.created';

  @IsString()
  version = '1';

  @IsObject()
  @ValidateNested()
  @Type(() => OwnerAttributes)
  attributes: OwnerAttributes;
}
