import React from 'react';
import { render } from '../../../testUtils';
import Header from '../../../../components/layouts/pc/header';

describe('layouts/pc/header component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Header />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
