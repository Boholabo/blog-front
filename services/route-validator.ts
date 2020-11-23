import systemConstants from '../constants/system';

export const isIndexRoute = (name: string): boolean =>
  name === systemConstants.Route.Index;

export const isArticleDetailRoute = (name: string): boolean =>
  name === systemConstants.Route.ArticleDetail;

export const isSearchArchiveRoute = (name: string): boolean =>
  name === systemConstants.Route.SearchArchive;

export const isServiceRoute = (name: string): boolean =>
  name === systemConstants.Route.Service;

export const isAppRoute = (name: string): boolean =>
  name === systemConstants.Route.App;
