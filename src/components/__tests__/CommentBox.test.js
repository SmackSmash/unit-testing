import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toBe(1);
  expect(wrapped.find('button').length).toBe(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', { target: { value: 'test' } });
    wrapped.update();
  });

  it('allows users to edit the textarea', () => {
    expect(wrapped.find('textarea').prop('value')).toBe('test');
  });

  it('clears textarea after submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toBe('');
  });
});
