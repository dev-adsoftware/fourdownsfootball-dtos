import 'reflect-metadata';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumberString,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PlayerAssignmentAttributes } from '../../attributes/player-assignment.attributes.dto';
import { Dto } from '../../dto';

export class TeamRosterView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlayerAssignmentAttributes)
  players: PlayerAssignmentAttributes[];
}
