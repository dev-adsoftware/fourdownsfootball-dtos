import { IsString } from 'class-validator';
import { Dto } from '../dto';

export class TeamAttributes extends Dto {
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
}
