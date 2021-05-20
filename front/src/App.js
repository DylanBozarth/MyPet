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
      <div className=" row">
        <div className="col-sm-4">
        <Link to="/pets" className="nav-link">
          My Pet
        </Link>
</div>
        

        <div className="col-sm-4">
          <Link className="nav-link" to="/submit">
            Submit your own!
          </Link>
        </div>
        <ul className="navbar-nav col-sm-4">
          {user ? (
            <div className="">
              <a
                onClick={logout}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Logout
              </a>
              <div className="">Hello {user.name}!</div>
            </div>
          ) : (
            <div className="col-sm-4 ">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </div>
          )}
        </ul>
      </div>

      {/* end of navigation /
       */}
      <div className="container-fluid ">
        <Switch>
          <Route exact path={["/", "/pets"]} component={RestaurantsList} />
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
