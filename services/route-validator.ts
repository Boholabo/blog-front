import systemConstants from '../constants/system';

export const isIndexRoute = (name: string) =>
  name === systemConstants.Route.Index;

export const isArticleDetailRoute = (name: string) =>
  name === systemConstants.Route.ArticleDetail;

export const isSearchArchiveRoute = (name: string) =>
  name === systemConstants.Route.SearchArchive;

export const isServiceRoute = (name: string) =>
  name === systemConstants.Route.Service;

export const isAppRoute = (name: string) => name === systemConstants.Route.App;
