import 'reflect-metadata';
import { Type } from 'class-transformer';
import {
  IsNumberString,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PlayerAttributes } from '../../attributes/player.attributes.dto';
import { Dto } from '../../dto';
import { PlayerStatAttributes } from '../../attributes/player-stat.attributes.dto';

export class PlayerSummaryView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

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
