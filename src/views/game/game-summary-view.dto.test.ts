import { GameSummaryView } from '.';
import { TeamSummaryView } from '..';
import { GameState } from '../../types';

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
        homeTeam: new TeamSummaryView().init({
          id: 'jest.homeTeamId',
          sequence: '0',
          city: 'jest.homeTeam.city',
          state: 'jest.homeTeam.state',
          country: 'jest.homeTeam.country',
          nickname: 'jest.homeTeam.nickname',
          abbreviation: 'jest.homeTeam.abbreviation',
          pluralNickname: 'jest.homeTeam.pluralNickname',
          shortNickname: 'jest.homeTeam.shortNickname',
          ownerUsername: 'jest.homeUsername',
        }),
        awayUsername: 'jest.awayUsername',
        awayTeamId: 'jest.awayTeamId',
        awayTeam: new TeamSummaryView().init({
          id: 'jest.awayTeamId',
          sequence: '0',
          city: 'jest.awayTeam.city',
          state: 'jest.awayTeam.state',
          country: 'jest.awayTeam.country',
          nickname: 'jest.awayTeam.nickname',
          abbreviation: 'jest.awayTeam.abbreviation',
          pluralNickname: 'jest.awayTeam.pluralNickname',
          shortNickname: 'jest.awayTeam.shortNickname',
          ownerUsername: 'jest.awayUsername',
        }),
      });
      expect(view).toEqual({
        actor: 'jest.actor',
        awayScore: 0,
        awayTeam: {
          abbreviation: 'jest.awayTeam.abbreviation',
          city: 'jest.awayTeam.city',
          country: 'jest.awayTeam.country',
          id: 'jest.awayTeamId',
          nickname: 'jest.awayTeam.nickname',
          ownerUsername: 'jest.awayUsername',
          pluralNickname: 'jest.awayTeam.pluralNickname',
          sequence: '0',
          shortNickname: 'jest.awayTeam.shortNickname',
          state: 'jest.awayTeam.state',
        },
        awayTeamId: 'jest.awayTeamId',
        awayUsername: 'jest.awayUsername',
        ballOn: 0,
        currentSeed: 0,
        direction: 'south',
        down: 0,
        gameClock: 900,
        homeScore: 0,
        homeTeam: {
          abbreviation: 'jest.homeTeam.abbreviation',
          city: 'jest.homeTeam.city',
          country: 'jest.homeTeam.country',
          id: 'jest.homeTeamId',
          nickname: 'jest.homeTeam.nickname',
          ownerUsername: 'jest.homeUsername',
          pluralNickname: 'jest.homeTeam.pluralNickname',
          sequence: '0',
          shortNickname: 'jest.homeTeam.shortNickname',
          state: 'jest.homeTeam.state',
        },
        homeTeamId: 'jest.homeTeamId',
        homeUsername: 'jest.homeUsername',
        id: 'jest.id',
        offense: 'none',
        period: 1,
        sequence: '0',
        state: 'awaiting-coin-face-choice',
        toGo: 0,
      });
    });
  });
});
