import { TeamAttributes } from './team.attributes.dto';

describe('given: missing team data', () => {
  describe('when: I create initialize', () => {
    it('then: error matched snapshot', async () => {
      expect(() =>
        new TeamAttributes().init({}),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
