import { createDto } from '../../dto';
import { GameCreatedEvent } from '../..';

describe('given: no game created event data', () => {
  describe('when: I create an game created event dto', () => {
    it('then: dto threw expected error', async () => {
      expect(() =>
        createDto(GameCreatedEvent, {}),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('given: proper game', () => {
  describe('when: I create an game dto', () => {
    it('then: dto was created with expected values', async () => {
      expect(
        createDto(GameCreatedEvent, {
          homeUsername: 'jest.homeUsername',
          homeTeamId: 'jest.homeTeamId',
          awayUsername: 'jest.awayUsername',
          awayTeamId: 'jest.awayTeamId',
        }),
      ).toEqual({
        awayTeamId: 'jest.awayTeamId',
        awayUsername: 'jest.awayUsername',
        homeTeamId: 'jest.homeTeamId',
        homeUsername: 'jest.homeUsername',
      });
    });
  });
});
