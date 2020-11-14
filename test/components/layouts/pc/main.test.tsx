import React from 'react';
import { render } from '../../../testUtils';
import PcMain from '../../../../components/layouts/pc/main';

describe('layouts/pc/main component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <PcMain>
        <div>test</div>
      </PcMain>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
