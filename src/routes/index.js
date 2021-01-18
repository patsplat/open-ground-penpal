import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../home";
import Profile from "../profile";
import NoMatch from "../nomatch";

export const Routes = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  </main>
);

export default Routes;