import { TeamRosterView } from './team-roster-view.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new TeamRosterView().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'TeamRosterView: id must be a string, sequence must be a number string, players must be an array',
          ),
        );
      }
    });
  });
});
