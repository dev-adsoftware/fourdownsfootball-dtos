import { DepthChartAssignmentAttributes } from './depth-chart-assignment.attributes.dto';

describe('given: missing player data', () => {
  describe('when: I create initialize', () => {
    it('then: error matched snapshot', async () => {
      expect(() =>
        new DepthChartAssignmentAttributes().init({}),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
