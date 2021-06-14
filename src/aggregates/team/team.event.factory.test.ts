import { TeamEventFactory } from '.';

describe('given: team event factory', () => {
  describe('when: I create factory', () => {
    it('then: event list was correct', async () => {
      expect(new TeamEventFactory().events).toMatchObject({
        'team.created': {},
        'player.assigned': {},
        'depth-chart.assigned': {},
      });
    });
  });
});
