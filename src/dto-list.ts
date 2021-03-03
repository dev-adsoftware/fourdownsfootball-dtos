import { Dto } from './dto';

export class DtoList<T extends Dto> {
  public items: T[];

  public lastKey?: Record<string | number, unknown>;

  public serialize(): string {
    return JSON.stringify(this);
  }
}
