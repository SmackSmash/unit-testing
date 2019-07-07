import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toBe(1);
  expect(wrapped.find('button').length).toBe(1);
});

it('allows users to edit the textarea', () => {
  wrapped.find('textarea').simulate('change', { target: { value: 'test' } });
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toBe('test');
});

it('clears textarea after submit', () => {
  wrapped.find('textarea').simulate('change', { target: { value: 'test' } });
  wrapped.update();
  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toBe('');
});
