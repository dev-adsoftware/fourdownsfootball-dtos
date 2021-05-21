import { RandomCreatedEvent } from './random-created-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new RandomCreatedEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toMatchSnapshot();
      }
    });
  });
});
