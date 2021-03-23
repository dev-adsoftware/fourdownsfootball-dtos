import { GameSummaryView } from '.';
import { DirectionChoices, GameState } from '../../types';

describe('given: game summary data', () => {
  describe('when: I create a game summary view with a dto factory', () => {
    it('then: game summary view was returned', async () => {
      const view = new GameSummaryView().init({
        id: 'jest.id',
        sequence: '0',
        currentSeed: 0,
        state: GameState.AwaitingCoinFaceChoice,
        actor: 'jest.actor',
        homeUsername: 'jest.homeUsername',
        homeTeamId: 'jest.homeTeamId',
        awayUsername: 'jest.awayUsername',
        awayTeamId: 'jest.awayTeamId',
      });
      expect(view).toEqual({
        actor: 'jest.actor',
        awayScore: 0,
        awayTeamId: 'jest.awayTeamId',
        awayUsername: 'jest.awayUsername',
        ballOn: 0,
        currentSeed: 0,
        direction: DirectionChoices.South,
        down: 0,
        gameClock: 900,
        homeScore: 0,
        homeTeamId: 'jest.homeTeamId',
        homeUsername: 'jest.homeUsername',
        id: 'jest.id',
        offense: 'none',
        period: 1,
        sequence: '0',
        state: 0,
        toGo: 0,
      });
    });
  });
});
