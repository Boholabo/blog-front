import { atom } from 'recoil';
import i18nConfig from '../../config/i18n.config';
import stateConstants from '../../constants/state';
import systemConstants from '../../constants/system';

export const themeState = atom<string>({
  key: 'theme',
  default: systemConstants.Theme.Default,
});

// TODO: 型付け
export const constantsState = atom({
  key: 'constants',
  default: stateConstants,
});

export const imageExtState = atom<string>({
  key: 'imageExt',
  default: systemConstants.ImageExt.WebP,
});

export const userAgentState = atom<string>({
  key: 'userAgent',
  default: '',
});

export const languageState = atom<string>({
  key: 'language',
  default: i18nConfig.default,
});

export const isTwoColumnsState = atom<boolean>({
  key: 'isTwoColumns',
  default: false,
});

export const isThreeColumnsState = atom<boolean>({
  key: 'isThreeColumns',
  default: false,
});

export const isMobileState = atom<boolean>({
  key: 'isMobile',
  default: false,
});

export const isJAUserState = atom<boolean>({
  key: 'isJAUser',
  default: true,
});

export const onMobileSidebarState = atom<boolean>({
  key: 'onMobileSidebar',
  default: false,
});

export const onBarrageState = atom<boolean>({
  key: 'onBarrage',
  default: false,
});

export const onMyMapState = atom<boolean>({
  key: 'onMyMap',
  default: false,
});

export const onWallpaperState = atom<boolean>({
  key: 'onWallpaper',
  default: false,
});

// 型付け
export const adminInfo = atom<any>({
  key: 'adminInfo',
  default: {},
});

// TODO: 型付け
export const appOption = atom<{
  fetching: boolean;
  data: any;
}>({
  key: 'appOption',
  default: {
    fetching: false,
    data: null,
  },
});
