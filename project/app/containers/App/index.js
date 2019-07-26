/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from '../LoginPage';
import InfomationPage from '../InfomatonPage';
import StudentInfomationPage from '../StudentInfomationPage';
import TeacherInfomationPage from '../TeacherInfomationPage';
// import { PrivateRoute } from '../../components/_components/PrivateRoute';
import { AdminPage } from '../AdminPage';
import { history, Role } from '../../components/_helpers';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/admin" roles={[Role.Admin]} component={AdminPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/info" component={InfomationPage} />
          <Route path="/teacher" component={TeacherInfomationPage} />
          <Route path="/student" component={StudentInfomationPage} />
        </Switch>
        <GlobalStyle />
      </div>
    </Router>
  );
}
