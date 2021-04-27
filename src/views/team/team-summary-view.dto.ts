import { IsNumberString, IsString } from 'class-validator';
import { Dto } from '../../dto';

export class TeamSummaryView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

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
