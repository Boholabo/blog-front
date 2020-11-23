import { selector } from 'recoil';
import { listState } from '../atoms/article';

export const getArticle = selector({
  key: 'article',
  get: ({ get }) => {
    return get(listState);
  },
});
