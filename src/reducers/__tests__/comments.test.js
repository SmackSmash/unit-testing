import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'test'
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(['test']);
});

it('processes unknown actions gracefully', () => {
  const action = { type: 'TEST' };
  const newState = commentsReducer([], action);
  expect(newState).toEqual([]);
});
