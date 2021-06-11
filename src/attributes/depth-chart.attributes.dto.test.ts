import { DepthChartAttributes } from './depth-chart.attributes.dto';

describe('given: missing player data', () => {
  describe('when: I create initialize', () => {
    it('then: error matched snapshot', async () => {
      expect(() =>
        new DepthChartAttributes().init({}),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
