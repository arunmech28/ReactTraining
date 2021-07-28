import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import Landing from "./components/layout/Landing";
import { Provider } from "react-redux";
import store from "./redux/store";
import React, { useEffect } from "react";
import { setAuthToken } from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/authAction";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route component={Routes}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
