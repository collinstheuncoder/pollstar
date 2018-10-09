import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

// Other views
import Landing from "../../views/other/Landing";
import Home from "../../views/other/Home";
import NotFound from "../../views/other/NotFound";

// User views
import RegisterPage from "../../containers/user/RegisterPage";
import LoginPage from "../../containers/user/LoginPage";
import AccountPage from "../../containers/user/AccountPage";
import SignInPage from "../SignInPage";

// Poll Categories List 
import PollCategoriesPage from "../../containers/categories/PollCategoriesPage";

// Polls views
import PollsPage from "../../containers/polls/PollsPage";
import PollPage from "../../containers/polls/PollPage";
import NewPollPage from "../../containers/polls/NewPollPage";

// Authorization HOCs
import requiresAuth from "../../hoc/require-auth";
import noAuthRequired from "../../hoc/no-auth-required";

import constants from "../../constants";

const {
  routes: { LANDING, HOME, REGISTER, LOGIN, ACCOUNT, POLL_LIST, NEW_POLL, CATEGORIES },
} = constants;

function Main() {
  return (
    <Container>
      <Switch>
        <Route exact path={LANDING} component={noAuthRequired(Landing)} />
        <Route exact path="/redux-form" component={SignInPage} />
        <Route path={HOME} component={requiresAuth(Home)} />
        <Route path={REGISTER} component={noAuthRequired(RegisterPage)} />
        <Route path={LOGIN} component={noAuthRequired(LoginPage)} />
        <Route path={ACCOUNT} component={requiresAuth(AccountPage)} />
        <Route path={NEW_POLL} component={requiresAuth(NewPollPage)} />
        <Route exact path={POLL_LIST} component={PollsPage} />
        <Route
          exact
          path={CATEGORIES}
          component={PollCategoriesPage}
        />
        <Route
          path={`${POLL_LIST}/c/:categoryName/p/:pollId`}
          component={PollPage}
        />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}
export default Main;
