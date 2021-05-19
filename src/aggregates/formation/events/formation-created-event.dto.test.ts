import { FormationCreatedEvent } from './formation-created-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new FormationCreatedEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'FormationCreatedEvent: name must be a string, formationType must be a valid enum value, each value in positionMap must be a string, positionMap must contain not more than 11 elements, positionMap must contain at least 11 elements',
          ),
        );
      }
    });
  });
});
