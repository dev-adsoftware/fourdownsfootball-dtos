import { Dto } from './dto';

export class DtoList {
  public items: Dto[];

  public lastKey?: string;

  public serialize(): string {
    return JSON.stringify(this);
  }
}
