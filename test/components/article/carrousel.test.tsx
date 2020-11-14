import React from 'react';
import { render } from '../../testUtils';
import Carrousel from '../../../components/article/carrousel';

describe('article/carrousel component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Carrousel article={{ data: { data: [] } }} />,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
