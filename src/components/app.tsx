import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/main';
import Page404 from './pages/page-404';
import Login from './pages/login';
import PrivateRoute from './private-route';
import {AppRoute, AuthorizationStat} from '../constants';
import Favorites from './pages/favorites';
import Offer from './pages/offer';

export type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact render={() => <Main offersCount={offersCount}/>}/>
        <Route path={AppRoute.Offer} exact render={() => <Offer/>} />
        <PrivateRoute path={AppRoute.Favorites} render={() => <Favorites/>} authorizationStat={AuthorizationStat.NoAuth} exact/>
        <Route path={AppRoute.Login} exact render={() => <Login/>}/>
        <Route render={() => <Page404/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
