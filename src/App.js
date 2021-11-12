import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Shared/Navigation/Navigation";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import ExploreAll from "./Pages/ExploreAll/ExploreAll/ExploreAll";
// import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PurchaseCar from "./Pages/PurchaseCar/PurchaseCar";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
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
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute exact path="/puschase-car/:carId">
              <PurchaseCar />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
