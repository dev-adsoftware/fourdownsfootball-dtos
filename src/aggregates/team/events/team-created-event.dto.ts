import { IsObject, IsString, ValidateNested } from 'class-validator';
import { TeamAttributes } from '../../../attributes/team.attributes.dto';
import { Event } from '../../../event.dto';

export class TeamCreatedEvent extends Event {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'team.created';

  @IsString()
  version = '1';

  @IsString()
  id: string;

  @IsString()
  ownerUsername: string;

  @IsObject()
  @ValidateNested()
  attributes: TeamAttributes;
}
