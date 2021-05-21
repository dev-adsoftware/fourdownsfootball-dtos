import { TeamCreatedEvent } from './team-created-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new TeamCreatedEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'TeamCreatedEvent: id must be a string, ownerUsername must be a string, attributes must be an object',
          ),
        );
      }
    });
  });
});

describe('given: missing nested data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(
          new TeamCreatedEvent().init({
            id: 'jest.id',
            ownerUsername: 'jest.ownerUsername',
            attributes: {},
          }),
        ).not.toBeDefined();
      } catch (e) {
        expect(e).toMatchSnapshot();
      }
    });
  });
});
