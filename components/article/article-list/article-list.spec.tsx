import React from 'react';
import { render } from '../../../test/testUtils';
import ArticleList from './index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('article/list component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ArticleList article={{ data: { data: [] } }} />,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
