import 'reflect-metadata';
import { Type } from 'class-transformer';
import { IsObject, IsString, ValidateNested } from 'class-validator';
import { PlayerAttributes } from '../../../attributes/player.attributes.dto';
import { Event } from '../../../event.dto';
import { PlayerStatAttributes } from '../../../attributes';

export class PlayerCreatedEvent extends Event {
  @IsString()
  source = 'unknown';

  @IsString()
  type = 'player.created';

  @IsString()
  version = '1';

  @IsString()
  teamId: string;

  @IsObject()
  @ValidateNested()
  @Type(() => PlayerAttributes)
  attributes: PlayerAttributes;

  @IsObject()
  @ValidateNested()
  @Type(() => PlayerStatAttributes)
  statAttributes: PlayerStatAttributes;
}
