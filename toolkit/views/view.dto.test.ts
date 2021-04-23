export default (formalName: string, noHyphenNameParts: string[]): string =>
  `
import { ${formalName}View } from '.';

describe('given: ${noHyphenNameParts.join(' ')} data', () => {
  describe('when: I create a view', () => {
    it('then: ${formalName}View was returned', async () => {
      const view = new ${formalName}View().init({ placeholder: 'jest' });
      expect(view).toEqual({ placeholder: 'jest' });
    });
  });
});
`
    .trimStart()
    .trimEnd();
