import React, { useState, useEffect } from "react";

import axios from "axios";
const RestaurantsList = (props) => {
  const [pets, setPets] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  useEffect(() => {
    getPetInfo();
    console.log(props.user)
    console.log('log')
  }, []);


  async function getPetInfo() {
    const response = await fetch(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook"
    );
    const json = await response.json();
    console.log(json);
    setPets(json.pets);
  }

  const find = (query, by) => {
    getPetInfo
      .find(query, by)
      .then((response) => {
        setPets(response.data.restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name");
  };

  const findByType = () => {
    find(searchType, "type");
  };
  const deletePet = (e, ) => {
      e.preventDefault();
    let data = {
      user: props.user.name
    }
     
     
      axios
      .delete(
        `https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/deletePet`,
        data
      )
      .then((response) => {
        console.log(response);
      });
     
    }
  
  if (pets) {
    return (
      <div className="row body">
        {pets.map((pets) => {
          return (
            <div className="col-lg-4 text-center">
              <div className="card" key={pets.name}>
                <div className="card-body">
                  <h3 className="card-title">{pets.pet}</h3>
                  <h4 className="card-title">{pets.breed}</h4>
                  <p>submitted by: {pets.user}</p>{" "}
                  {pets.user === props.user.name ? (
                    <button className="btn btn-danger" onClick={(e) => deletePet(e)}>Delete </button>
                  ) : (
                    <p><br /></p>
                  )}
                  <img
                    src={pets.image}
                    className="img-fluid petimage"
                    alt={pets.pet}
                  ></img>
                  <p className="card-text-title">Fun fact about {pets.pet}:</p>
                  <p className="card-text">{pets.desc}</p>
                  <div className="row">
                    {/*} <Link
                      to={"/pets/" + pets._id}
                      className="btn btn-primary col-lg-5 mx-1 mb-1"
                    >
                      View Comments
                    </Link>
          */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>App is loading</div>;
  }
};

export default RestaurantsList;
