import React from 'react';
import { render } from '../../../testUtils';
import SpMain from '../../../../components/layouts/sp/main';

describe('layouts/sp/main component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <SpMain>
        <div>test</div>
      </SpMain>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
