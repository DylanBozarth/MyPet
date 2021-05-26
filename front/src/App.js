import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AddReview from "./components/add-review";
import RestaurantsList from "./components/pet-list";
import Login from "./components/login";
import PetFocus from "./components/petfocus";
import { Submit } from "./components/submit";
import { Account } from "./components/account";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="container">
      
     
      <div className="header text-center">My pet</div>
        <Switch>
          <Route
            exact
            path={["/", "/pets"]}
            render={(props) => <RestaurantsList {...props} user={user} />}
          />
          <Route
            path="/pet/:id/review"
            render={(props) => <AddReview {...props} user={user} />}
          />
          <Route
            path="/pets/:id"
            render={(props) => <PetFocus {...props} user={user} />}
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} login={login} />}
          />
          <Route
            path="/submit"
            render={(props) => <Submit {...props} user={user} login={Submit} />}
          />
          <Route
            path="/account"
            render={(props) => (
              <Account {...props} user={user} login={Submit} />
            )}
          />
        </Switch>
      
      <div className="navbar row">
        <div className="col-lg-4 nav-text">
          <Link to ="/">Pets</Link>
        </div>
        <div className="col-lg-4 nav-text">
          <Link to="/submit">Submit</Link>
        </div>
        <div className="col-lg-4 nav-text">
         <Link to="/login">Login</Link>
        </div>
      </div>
      
    </div>
  );
}

export default App;
