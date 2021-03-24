import { GamePlayView } from '.';
import { DefenseFormations, OffenseFormations } from '../../types';

describe('given: game summary data', () => {
  describe('when: I create a game play view with a dto factory', () => {
    it('then: game play view was returned', async () => {
      const view = new GamePlayView().init({
        id: 'jest.id',
        offenseSequence: '0',
        offensePlay: 'jest.offense.play',
        offenseFormation: OffenseFormations.Kickoff,
        offensePlayers: [
          'jest.kicker',
          'jest.special1',
          'jest.special2',
          'jest.special3',
          'jest.special4',
          'jest.special5',
          'jest.special6',
          'jest.special7',
          'jest.special8',
          'jest.special9',
          'jest.special10',
        ],
        defenseSequence: '1',
        defensePlay: 'jest.defense.play',
        defenseFormation: DefenseFormations.KickReturn,
        defensePlayers: [
          'jest.returner',
          'jest.special1',
          'jest.special2',
          'jest.special3',
          'jest.special4',
          'jest.special5',
          'jest.special6',
          'jest.special7',
          'jest.special8',
          'jest.special9',
          'jest.special10',
        ],
      });
      expect(view).toEqual({
        defenseFormation: 0,
        defensePlay: 'jest.defense.play',
        defensePlayers: [
          'jest.returner',
          'jest.special1',
          'jest.special2',
          'jest.special3',
          'jest.special4',
          'jest.special5',
          'jest.special6',
          'jest.special7',
          'jest.special8',
          'jest.special9',
          'jest.special10',
        ],
        defenseSequence: '1',
        id: 'jest.id',
        offenseFormation: 0,
        offensePlay: 'jest.offense.play',
        offensePlayers: [
          'jest.kicker',
          'jest.special1',
          'jest.special2',
          'jest.special3',
          'jest.special4',
          'jest.special5',
          'jest.special6',
          'jest.special7',
          'jest.special8',
          'jest.special9',
          'jest.special10',
        ],
        offenseSequence: '0',
      });
    });
  });
});
