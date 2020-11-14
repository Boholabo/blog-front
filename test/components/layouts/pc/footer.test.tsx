import React from 'react';
import { render } from '../../../testUtils';
import Footer from '../../../../components/layouts/pc/footer';

describe('layouts/pc/footer component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
