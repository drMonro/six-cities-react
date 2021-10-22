import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/main';
import Page404 from './pages/page-404';
import Login from './pages/login';
import PrivateRoute from './private-route';
import {AppRoute, AuthorizationStat} from '../constants';
import Favorites from './pages/favorites';
import Offer from './pages/offer';
import {ReviewType} from '../types/reviewType';
import {OfferType} from '../types/offerType';

export type AppProps = {
  offers: OfferType[];
  reviews: ReviewType[];
}

function App({offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact render={() => <Main offers={offers}/>}/>
        <Route path={AppRoute.Offer} exact render={() => <Offer/>} />
        <PrivateRoute path={AppRoute.Favorites} render={() => <Favorites offers={offers}/>} authorizationStat={AuthorizationStat.Auth} exact/>
        <Route path={AppRoute.Login} exact render={() => <Login/>}/>
        <Route render={() => <Page404/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
