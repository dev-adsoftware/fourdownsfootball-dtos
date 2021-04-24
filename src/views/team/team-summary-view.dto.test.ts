import { TeamSummaryView } from '.';

describe('given: team summary data', () => {
  describe('when: I create a view', () => {
    it('then: TeamSummaryView was returned', async () => {
      const view = new TeamSummaryView().init({
        id: 'jest.id',
        sequence: '0',
        city: 'jest.city',
        state: 'jest.state',
        country: 'jest.country',
        nickname: 'jest.nickname',
        abbreviation: 'jest.abbreviation',
        pluralNickname: 'jest.pluralNickname',
        shortNickname: 'jest.shortNickname',
        ownerUsername: 'jest.ownerUsername',
      });
      expect(view).toEqual({
        id: 'jest.id',
        sequence: '0',
        city: 'jest.city',
        state: 'jest.state',
        country: 'jest.country',
        nickname: 'jest.nickname',
        abbreviation: 'jest.abbreviation',
        pluralNickname: 'jest.pluralNickname',
        shortNickname: 'jest.shortNickname',
        ownerUsername: 'jest.ownerUsername',
      });
    });
  });
});
