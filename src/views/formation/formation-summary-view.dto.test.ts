import { FormationSummaryView } from '.';
import { FormationTypes } from '../../types';

describe('given: formation summary data', () => {
  describe('when: I create a formation summary view with a dto factory', () => {
    it('then: formation summary view was returned', async () => {
      const view = new FormationSummaryView().init({
        name: 'jest.name',
        sequence: '0',
        formationType: FormationTypes.Kickoff,
        positionMap: [
          'p1',
          'p2',
          'p3',
          'p4',
          'p5',
          'p6',
          'p7',
          'p8',
          'p9',
          'p10',
          'p11',
        ],
      });
      expect(view).toEqual({
        name: 'jest.name',
        formationType: FormationTypes.Kickoff,
        positionMap: [
          'p1',
          'p2',
          'p3',
          'p4',
          'p5',
          'p6',
          'p7',
          'p8',
          'p9',
          'p10',
          'p11',
        ],
        sequence: '0',
      });
    });
  });
});
