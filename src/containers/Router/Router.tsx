import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { App } from 'containers';

const Main = React.lazy(() => import('pages/Main'));
const Profile = React.lazy(() => import('pages/Profile'));
const Board = React.lazy(() => import('pages/Board'));
const Bookmarks = React.lazy(() => import('pages/Bookmarks'));
const Calendar = React.lazy(() => import('pages/Calendar'));
const CandidatsArchive = React.lazy(() => import('pages/CandidatsArchive'));
const Login = React.lazy(() => import('pages/Login'));

const RouterContainer = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/board" exact component={Board} />
          <Route path="/bookmarks" exact component={Bookmarks} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/archive" exact component={CandidatsArchive} />
          <Route path="/login" exact component={Login} />
          <Redirect to="/404" /> 
        </Switch>
      </App>
    </Router>
  );
};

export { RouterContainer };
