import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';

export abstract class Dto {
  public init(obj: Record<string | number, unknown>): this {
    Object.assign(
      this,
      plainToClass(this.constructor as ClassConstructor<this>, { ...obj }),
    );
    return this.validate(true);
  }

  public serialize(): string {
    return JSON.stringify(this);
  }

  private validate(whitelist: boolean): this {
    const errors = validateSync(this, {
      whitelist,
      validationError: { target: false },
    });
    if (errors.length > 0) {
      throw new Error(
        `${this.constructor.name}: ${this.validationErrors(errors)}`,
      );
    }

    return this;
  }

  private validationErrors(errors: ValidationError[]): string {
    return errors
      .map((e) => {
        if (e.constraints) return Object.values(e.constraints).join(', ');
        return String(e);
      })
      .join(', ');
  }
}
