import {
  IsNumberString,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TeamAttributes } from '../../attributes/team.attributes.dto';
import { Dto } from '../../dto';

export class TeamSummaryView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsString()
  ownerUsername: string;

  @IsObject()
  @ValidateNested()
  attributes: TeamAttributes;
}
