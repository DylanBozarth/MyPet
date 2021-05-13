import React, { useState, useEffect } from "react";
import getPetInfo from "../services/pets";
import { Link } from "react-router-dom";

const RestaurantsList = props => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName ] = useState("");
  const [searchType, setSearchType ] = useState("");

  useEffect(() => {
    retrieveRestaurants();
    
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchType = e => {
    const searchType = e.target.value;
    setSearchType(searchType);
  };



  const retrieveRestaurants = () => {
    getPetInfo.getAll()
      .then(response => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
        
      })
      .catch(e => {
        console.log(e);
      });
  };



 

  const find = (query, by) => {
    getPetInfo.find(query, by)
      .then(response => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name")
  };

  const findByType = () => {
    find(searchType, "type")
  };

  

  return (
    <div className="container text-center searchbars">
      <div className="row">
        <div className="input-group col-lg-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Type"
            value={searchType}
            onChange={onChangeSearchType}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByType}
            >
              Search
            </button>
          </div>
        </div>
        

      </div>
      {/* end of searhbars */}
      <div className="row darkbg">
        {restaurants.map((restaurant) => {
          const address = `${restaurant.address.building} ${restaurant.address.street}, ${restaurant.address.zipcode}`;
          return (
            <div className="col-lg-4 darkbg">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p className="card-text">
                    <strong>Cuisine: </strong>{restaurant.cuisine}<br/>
                    <strong>Address: </strong>{address}
                  </p>
                  <div className="row">
                  <Link to={"/restaurants/"+restaurant._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                    View Comments
                  </Link>
                 <button className="btn btn-primary col-lg-5 mx-1 mb-1">Give like</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}


      </div>
    </div>
  );
};

export default RestaurantsList;