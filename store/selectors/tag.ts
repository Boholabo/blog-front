import { selector } from 'recoil';
import { tagState } from '../atoms/tag';

export const getCurrentTag = selector({
  key: 'currentTag',
  get: ({ get }) => {
    return get(tagState);
  },
});
