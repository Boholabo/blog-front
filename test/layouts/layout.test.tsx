import React from 'react';
import { render } from '../testUtils';
import Layout from '../../layouts/layout';

describe('Layout', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Layout>
        <div>test</div>
      </Layout>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
