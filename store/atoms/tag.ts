import { atom } from 'recoil';

export const TAG_API_PATH = '/tag';

export const tagState = atom<any>({
  key: 'tag',
  default: {
    fetching: false,
    data: [],
  },
});
