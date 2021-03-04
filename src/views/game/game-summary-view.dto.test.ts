import { GameSummaryView } from '.';
import { DtoFactory } from '../..';
import { GameState } from '../../types';

describe('given: game summary data', () => {
  describe('when: I create a game summary view with a dto factory', () => {
    it('then: game summary view was returned', async () => {
      const view = DtoFactory.create(GameSummaryView, {
        id: 'jest.id',
        sequence: '0',
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
        ballOn: 25,
        down: 1,
        gameClock: 0,
        homeScore: 0,
        homeTeamId: 'jest.homeTeamId',
        homeUsername: 'jest.homeUsername',
        id: 'jest.id',
        sequence: '0',
        state: 0,
        toGo: 10,
      });
    });
  });
});
