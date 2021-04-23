export default (formalName: string): string =>
  `
import { ${formalName}EventFactory } from '.';

describe('given: invalid event type', () => {
  describe('when: I create an event with the factory', () => {
    it('then: unknown event type error was thrown', async () => {
      expect(() => new ${formalName}EventFactory().create('invalid', {})).toThrow(
        'Unexpected error creating event type invalid',
      );
    });
  });
});
`
    .trimStart()
    .trimEnd();
