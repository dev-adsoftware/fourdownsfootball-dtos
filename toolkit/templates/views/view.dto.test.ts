import { FormalNameView } from './view.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new FormalNameView().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toMatchSnapshot();
      }
    });
  });
});

// describe('given: missing nested data', () => {
//   describe('when: I initialize', () => {
//     it('then: error matched snapshot', async () => {
//       try {
//         expect(
//           new FormalNameView().init({ attributes: {} }),
//         ).not.toBeDefined();
//       } catch (e) {
//         expect(e).toMatchSnapshot();
//       }
//     });
//   });
// });
