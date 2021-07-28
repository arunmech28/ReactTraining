import React from "react";
import { Route, Switch } from "react-router-dom";
// import Login from "../auth/Login";
// import Register from "../auth/Register";
// import Login2 from "../auth/Login2";
import Login3 from "../auth/Login3";
// import Register2 from "../auth/Register2";
import Register3 from "../auth/Register3";
import Dashboard from "../dashboard/Dashboard";
import Alert from "../layout/Alert";
import CreateProfile1 from "../profile/CreateProfile1";
import AddExperience from "../profile/AddExperience";
import PrivateRouting from "./PrivateRouting";
// import CreateProfile from "../profile/CreateProfile";

const Routes = () => {
  return (
    <div>
      <Alert></Alert>
      <Switch>
        <Route exact path="/login" component={Login3} />
        <Route exact path="/register" component={Register3} />
        <PrivateRouting exact path="/dashboard" component={Dashboard} />
        <PrivateRouting
          exact
          path="/create-profile"
          component={CreateProfile1}
        />
        <PrivateRouting exact path="/edit-profile" component={CreateProfile1} />
        <PrivateRouting
          exact
          path="/add-experience"
          component={AddExperience}
        />
      </Switch>
    </div>
  );
};

export default Routes;
