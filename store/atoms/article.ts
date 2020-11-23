import { atom } from 'recoil';

export const ARTICLE_API_PATH = '/article';
export const LIKE_ARTICLE_API_PATH = '/like/article';

const getDefaultListData = () => {
  return {
    data: [],
    pagination: {},
  };
};

export const listState = atom<any>({
  key: 'list',
  default: {
    fetching: false,
    data: getDefaultListData(),
  },
});

export const hotListState = atom<any>({
  key: 'hotList',
  default: {
    fetching: false,
    data: [],
  },
});

export const detailState = atom<any>({
  key: 'hotList',
  default: {
    fetching: false,
    data: {},
  },
});
