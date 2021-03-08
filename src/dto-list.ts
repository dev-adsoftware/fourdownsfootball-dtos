import { Dto } from './dto';

export class DtoList {
  public items: Dto[];

  public lastKey?: Record<string | number, unknown>;

  public serialize(): string {
    return JSON.stringify(this);
  }
}
