import { DepthChartAssignedEvent } from './depth-chart-assigned-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new DepthChartAssignedEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toMatchSnapshot();
      }
    });
  });
});
