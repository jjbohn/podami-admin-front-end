import { Route, Router } from "react-router";
import { createHistory } from "history";

import Blank from "./routes/blank";
import SignUp from "./routes/sign_up";

export default (withHistory, onUpdate) => {
  const history = createHistory();
  return (
    <Router history={history} onUpdate={onUpdate}>
      <Route path="/" component={Blank} />
      <Route path="/sign_up" component={SignUp} />
    </Router>
  );
};
