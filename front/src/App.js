import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddReview from "./components/add-review";
import RestaurantsList from "./components/pet-list";
import Login from "./components/login";
import PetFocus from "./components/petfocus";
import { Submit } from "./components/submit";
import { Searchbars } from "./components/searchbars";

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
      <nav className="navbar navbar-expand navbar-dark ">
        <a href="/pets" className="navbar-brand text-center">
          My Pet
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/submit">
              <div className="nav-link">Submit your pet</div>
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              <div className="row">
                <a
                  onClick={logout}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </a>
                <div className="nav-link">Hello {user.name}!</div>
              </div>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
        <div className="nav-item">
          <Searchbars />
        </div>
      </nav>

      <div className="container-fluid ">
        <Switch>
          <Route
            exact
            path={["/", "/pets"]}
            component={RestaurantsList}
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
            render={(props) => <Submit {...props} login={Submit} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
