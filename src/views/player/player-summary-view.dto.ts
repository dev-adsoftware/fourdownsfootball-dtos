import {
  IsNumberString,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PlayerAttributes } from '../../attributes/player.attributes.dto';
import { Dto } from '../../dto';

export class PlayerSummaryView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsString()
  teamId: string;

  @IsObject()
  @ValidateNested()
  attributes: PlayerAttributes;
}
