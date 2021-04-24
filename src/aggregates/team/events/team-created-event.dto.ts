import { IsString } from 'class-validator';
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
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  nickname: string;

  @IsString()
  abbreviation: string;

  @IsString()
  pluralNickname: string;

  @IsString()
  shortNickname: string;

  @IsString()
  ownerUsername: string;
}
