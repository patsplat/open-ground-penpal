import {
  Switch,
  Route,
} from "react-router-dom";

import Home from "../home";
import Profile from "../profile";
import NoMatch from "../nomatch";

export const Routes = () => (
  <main>
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
  </main>
);

export default Routes;