import { Dto } from '.';

export class DtoFactory {
  static create<T extends Dto>(
    C: { new (): T },
    obj: Record<string, unknown>,
  ): T {
    const newT = new C();
    newT.init(obj);
    return newT;
  }
}
