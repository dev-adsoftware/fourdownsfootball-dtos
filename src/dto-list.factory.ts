import { Dto, DtoList } from '.';

export class DtoListFactory {
  static create<T extends Dto>(
    C: { new (): T },
    items: Record<string, unknown>[],
    lastKey?: Record<string, unknown>,
  ): DtoList<T> {
    const newList = new DtoList<T>();
    newList.items = items.map((item: Record<string, unknown>) =>
      new C().init(item),
    );
    newList.lastKey = lastKey;
    return newList;
  }
}
