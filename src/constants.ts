export const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  OfferLink = '/offer/',
}

export const enum AuthorizationStat {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const offerCardClasses = {
  mainArticleClass: 'cities__place-card place-card',
  mainImageData: {imageClass: 'cities__image-wrapper place-card__image-wrapper', imageSizes: {width: '260', height: '200'} },
  favoritesArticleClass: 'favorites__card place-card',
  favoritesImageData: {imageClass: 'favorites__image-wrapper place-card__image-wrapper', imageSizes: {width: '150', height: '110'} },
};
