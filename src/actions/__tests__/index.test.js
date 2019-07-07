import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('should have a type of SAVE_COMMENT', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('produces action with payload equal to text input', () => {
    const action = saveComment('test');
    expect(action.payload).toEqual('test');
  });
});
