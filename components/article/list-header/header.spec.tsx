import React from 'react';
import { render } from '@/test/testUtils';
import ListHeader from './index';

describe('article/list-header component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<ListHeader />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
