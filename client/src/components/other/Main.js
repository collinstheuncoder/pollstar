import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Landing from './Landing';
import Home from './Home';
import NotFound from './NotFound';
import Register from '../user/Register';
import Login from '../user/Login';
import Account from '../user/Account';
import PollList from '../polls/PollList';
import PollCategory from '../polls/PollCategory';
import AddPoll from '../polls/AddPoll';
import Poll from '../polls/Poll';

// Authorization HOCs
import requiresAuth from '../../hoc/require-auth';
import noAuthRequired from '../../hoc/no-auth-required';

import constants from '../../constants';

const {
  routes: { LANDING, HOME, REGISTER, LOGIN, ACCOUNT, POLL_LIST, CREATE_POLL },
} = constants;

const Main = () => (
  <Container>
    <Switch>
      <Route exact path={LANDING} component={Landing} />
      <Route path={HOME} component={requiresAuth(Home)} />
      <Route path={REGISTER} component={noAuthRequired(Register)} />
      <Route path={LOGIN} component={noAuthRequired(Login)} />
      <Route path={ACCOUNT} component={requiresAuth(Account)} />
      <Route exact path={POLL_LIST} component={PollList} />
      <Route exact path={`${POLL_LIST}/:category`} component={PollCategory} />
      <Route path={`${POLL_LIST}/:category/:pollId`} component={Poll} />
      <Route path={CREATE_POLL} component={requiresAuth(AddPoll)} />
      <Route component={NotFound} />
    </Switch>
  </Container>
);

export default Main;
