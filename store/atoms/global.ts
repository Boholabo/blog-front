import { atom } from 'recoil';
import i18nConfig from '../../config/i18n.config';
import stateConstants from '../../constants/state';
import systemConstants from '../../constants/system';
import { getStorageReader } from '../../services/local-storage';

const localThemeReader = getStorageReader(systemConstants.StorageField.Theme);

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

export const getters = {
  isMobile: (state: { isMobile: any }) => state.isMobile,
  isEnLang: (state: { language: string }) =>
    state.language === systemConstants.Language.En,
  isDarkTheme: (state: { theme: string }) =>
    state.theme === systemConstants.Theme.Dark,
  isWebPImage: (state: { imageExt: string }) =>
    state.imageExt === systemConstants.ImageExt.WebP,
};

export const mutations = {
  updateTheme(state: { theme: any }, action: string) {
    const themes = [systemConstants.Theme.Default, systemConstants.Theme.Dark];
    if (themes.includes(action)) {
      state.theme = action;
      localThemeReader.set(action);
    }
  },
  resetTheme(state: { theme: string }) {
    const historyTheme = localThemeReader.get();
    if (historyTheme) {
      const theme =
        historyTheme === systemConstants.Theme.Dark
          ? systemConstants.Theme.Dark
          : systemConstants.Theme.Default;
      state.theme = theme;
      localThemeReader.set(theme);
    }
  },
  updateUserAgent(state: { userAgent: any }, action: any) {
    state.userAgent = action;
  },
  updateImageExt(state: { imageExt: any }, action: any) {
    state.imageExt = action;
  },
  updateMobileState(state: { isMobile: any }, action: any) {
    state.isMobile = action;
  },
  updateMobileSidebarOnState(state: { onMobileSidebar: any }, action: any) {
    state.onMobileSidebar = action;
  },
  updateTwoColumnsState(state: { isTwoColumns: any }, action: any) {
    state.isTwoColumns = action;
  },
  updateThreeColumnsState(state: { isThreeColumns: any }, action: any) {
    state.isThreeColumns = action;
  },
  updateSiteLikes(state: { appOption: { data: { meta: { likes: number } } } }) {
    state.appOption.data.meta.likes++;
  },
  toggleUpdateBarrageOnState(state: { onBarrage: boolean }, action: null) {
    state.onBarrage = action != null ? !!action : !state.onBarrage;
  },
  toggleMyMapOnState(state: { onMyMap: boolean }) {
    state.onMyMap = !state.onMyMap;
  },
  toggleUpdateWallpaperOnState(state: { onWallpaper: boolean }, action: null) {
    state.onWallpaper = action != null ? !!action : !state.onWallpaper;
  },
  updateLanguage(state: { language: any }, action: any) {
    state.language = action;
  },
  updateZHState(state: { isZHUser: any }, action: any) {
    state.isZHUser = action;
  },
  updateAdminInfo(state: { adminInfo: any }, action: { result: any }) {
    state.adminInfo = action.result;
  },
  updateAppOptionFetching(
    state: { appOption: { fetching: any } },
    action: any
  ) {
    state.appOption.fetching = action;
  },
  updateAppOptionData(
    state: { appOption: { data: any } },
    action: { result: any }
  ) {
    state.appOption.data = action.result;
  },
  updateLikesIncrement(state: {
    appOption: { data: { meta: { likes: number } } };
  }) {
    state.appOption.data.meta.likes++;
  },
};

export const actions = {
  fetchAdminInfo({ commit }) {
    return this.$axios
      .$get('/auth/admin')
      .then((response) => commit('updateAdminInfo', response));
  },
  fetchAppOption({ commit, state }, force = false) {
    if (!force && state.appOption.data) {
      return Promise.resolve();
    }
    commit('updateAppOptionFetching', true);
    return this.$axios
      .$get(`/option`)
      .then((response) => {
        commit('updateAppOptionData', response);
        commit('updateAppOptionFetching', false);
      })
      .catch(() => commit('updateAppOptionFetching', false));
  },
  fetchLikeSite({ commit }) {
    return this.$axios.$patch(`/like/site`).then((response) => {
      commit('updateLikesIncrement');
      return Promise.resolve(response);
    });
  },
};
