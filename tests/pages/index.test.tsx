import React from 'react';
import { render, fireEvent } from '../testUtils';
import Index from '../../pages/index';

describe('Index page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Index allPosts={[]} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
