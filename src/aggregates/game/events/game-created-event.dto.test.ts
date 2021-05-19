import { GameCreatedEvent } from './game-created-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new GameCreatedEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'GameCreatedEvent: currentSeed must be a number conforming to the specified constraints, homeUsername must be a string, homeTeamId must be a string, homeTeamSequence must be a string, awayUsername must be a string, awayTeamId must be a string, awayTeamSequence must be a string',
          ),
        );
      }
    });
  });
});
