import { selector } from 'recoil';
import { isMobileState } from '../atoms/global';

export const getIsMobile = selector({
  key: 'isMobile',
  get: ({ get }) => {
    return get(isMobileState);
  },
});
