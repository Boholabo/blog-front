import { selector } from 'recoil';
import { isMobileState } from '../atoms/global';

const isMobile = selector({
  key: 'isMobile',
  get: ({ get }) => {
    return get();
    const toggle = get(toggleState);
    if (toggle) {
      return get(selectorA);
    } else {
      return get(selectorB);
    }
  },
});
