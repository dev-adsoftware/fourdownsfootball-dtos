/* eslint-disable max-classes-per-file */
import { createDto } from '../../dto';
import { Game } from '../..';

describe('given: no game data', () => {
  describe('when: I create an game dto', () => {
    it('then: dto threw expected error', async () => {
      expect(() => createDto(Game, {})).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('given: proper game', () => {
  describe('when: I create an game dto', () => {
    it('then: dto was created with expected values', async () => {
      expect(
        createDto(Game, {
          id: 'jest-id',
          homeUsername: 'jest-home-username',
          homeTeamId: 'jest-home-team-id',
          awayUsername: 'jest-away-username',
          awayTeamId: 'jest-away-team-id',
        }),
      ).toEqual({
        awayScore: 0,
        awayTeamId: 'jest-away-team-id',
        awayUsername: 'jest-away-username',
        ballOn: 25,
        down: 1,
        gameClock: 0,
        homeScore: 0,
        homeTeamId: 'jest-home-team-id',
        homeUsername: 'jest-home-username',
        id: 'jest-id',
        state: 'not-started',
        toGo: 10,
      });
    });
  });
});
