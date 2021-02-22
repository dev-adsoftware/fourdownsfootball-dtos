import { Dto } from './dto';

export class DtoList<T extends Dto> {
  public items: T[];

  public lastKey?: Record<string | number, unknown>;

  public serialize(): string {
    return JSON.stringify(this);
  }
}

export function createDtoList<T extends Dto>(
  C: { new (): T },
  items: Record<string | number, unknown>[],
  lastKey?: Record<string | number, unknown>,
): DtoList<T> {
  const newList = new DtoList<T>();
  newList.items = items.map((item: Record<string | number, unknown>) =>
    new C().init(item),
  );
  newList.lastKey = lastKey;
  return newList;
}
