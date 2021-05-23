import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AddReview from "./components/add-review";
import RestaurantsList from "./components/pet-list";
import Login from "./components/login";
import PetFocus from "./components/petfocus";
import { Submit } from "./components/submit";

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
      <div className=" row nav-bar">
        <div className="col-sm-4">
        <Link to="/pets" className="navbox">
        <p className="navtext"> My Pet</p>
        </Link>
</div>
        

        <div className="col-sm-4">
          <Link className="navbox" to="/submit">
            <p className="navtext">Submit your own!</p>
          </Link>
        </div>
        
          {user ? (
            <div className="navbox col-sm-4">
              <a
                onClick={logout}
                className="navtext "
                style={{ cursor: "pointer" }}
              >
                Logout
                <br />
                Hello, {user.name}!
              </a>
             
            </div>
          ) : (
            <div className="col-sm-4">
              <Link to={"/login"} className="navbox">
              <p className="navtext"> Login</p>
              </Link>
            </div>
          )}
        
      </div>

      {/* end of navigation /
       */}
      <div className="container-fluid  ">
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
            render={(props) => <Submit {...props} user={user} login={Submit} />}
          />
        </Switch>
      </div>
      <div className="footer text-center">Copywrite</div>
    </div>
  );
}

export default App;
