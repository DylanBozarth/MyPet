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
    localStorage.setItem("user", user)
  }

  async function logout() {
    setUser(null);
    alert('You have logged out')
  }

  return (
    <div className="container-fluid">
      
     
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
          
        </Switch>
      
      <div className="navbar row">
        <div className="col-lg-4 nav-text nav-item ">
          <Link to ="/" className="nav-text">Home</Link>
        </div>
        <div className="col-lg-4 nav-text nav-item">
          <Link to="/submit" className="nav-text">Submit your own</Link>
        </div>
        <div className="col-lg-4 nav-text nav-item">
        {(user ? <div  onClick={() => logout()}>Logout</div> : <Link to="/login" className="nav-text">Login</Link>)}
        </div>
      </div>
      
    </div>
  );
}

export default App;
