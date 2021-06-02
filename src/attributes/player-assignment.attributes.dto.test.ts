import { PlayerAssignmentAttributes } from './player-assignment.attributes.dto';

describe('given: missing player data', () => {
  describe('when: I create initialize', () => {
    it('then: error matched snapshot', async () => {
      expect(() =>
        new PlayerAssignmentAttributes().init({}),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
