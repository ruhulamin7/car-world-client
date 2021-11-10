import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Shared/Navigation/Navigation";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import ExploreAll from "./Pages/ExploreAll/ExploreAll/ExploreAll";
import Login from "./Pages/Login/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/explore-all">
            <ExploreAll />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
