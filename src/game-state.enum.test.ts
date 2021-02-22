/* eslint-disable max-classes-per-file */
import { GameState } from '.';

describe('given: not-started state', () => {
  it('then: state matched', async () => {
    expect(GameState.NotStarted).toEqual('not-started');
  });
});
describe('given: complete state', () => {
  it('then: state matched', async () => {
    expect(GameState.Complete).toEqual('complete');
  });
});
describe('given: in-progress state', () => {
  it('then: state matched', async () => {
    expect(GameState.InProgress).toEqual('in-progress');
  });
});
