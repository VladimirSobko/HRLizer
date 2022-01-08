import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { App } from 'containers';
import { ROUTE } from 'constants/routes';

const Main = React.lazy(() => import('pages/Main'));
const Profile = React.lazy(() => import('pages/Profile'));
const Board = React.lazy(() => import('pages/Board'));
const Bookmarks = React.lazy(() => import('pages/Bookmarks'));
const Sandbox = React.lazy(() => import('pages/Sandbox'));
const CandidatsArchive = React.lazy(() => import('pages/CandidatsArchive'));
const Login = React.lazy(() => import('pages/Login'));

const RouterContainer = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route path={ROUTE.LOGIN.PATH} exact component={Login} />
          <Route path={ROUTE.MAIN.PATH} exact component={Main} />
          <Route path={ROUTE.PROFILE.PATH} exact component={Profile} />
          <Route path={ROUTE.BOARD.PATH} exact component={Board} />
          <Route path={ROUTE.BOOKMARKS.PATH} exact component={Bookmarks} />
          <Route path={ROUTE.SANDBOX.PATH} exact component={Sandbox} />
          <Route path={ROUTE.ARCHIVE.PATH} exact component={CandidatsArchive} />
          <Redirect to={ROUTE.LOGIN.PATH} />
        </Switch>
      </App>
    </Router>
  );
};

export { RouterContainer };
