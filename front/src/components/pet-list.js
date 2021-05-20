import React, { useState, useEffect } from "react";
import getPetInfoService from "../services/pets";
import { Link } from "react-router-dom";
import { Searchbars } from "./searchbars";
const RestaurantsList = (props) => {
  const [pets, setPets] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const [likeCount, setLikeCount] = useState("");
  useEffect(() => {
    getPetInfo();
    addLike();
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchType = (e) => {
    const searchType = e.target.value;
    setSearchType(searchType);
  };

  async function getPetInfo() {
    const response = await fetch(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook"
    );
    const json = await response.json();
    console.log(json);
    setPets(json.pets);
  }
  const addLike = () => {
    let likes = parseInt(pets.likes, 0);
    console.log(likes)
    setLikeCount(likes += 1);
    console.log(likes + ' after add');
  };
  {
    /*
const getPetInfo = () => {
  getPetInfoService.getAll()
    .then(response => {
      console.log(response.data);
      setPets(response.data.restaurants);
      
    })
    .catch(e => {
      console.log(e);
    });
};
*/
  }

  const find = (query, by) => {
    getPetInfo
      .find(query, by)
      .then((response) => {
        console.log(response.data);
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
                  
                  <img
                    src={pets.image}
                    className="img-fluid petimage"
                    alt={pets.pet}
                  ></img>
                  <p className="card-text-title">Fun fact about {pets.pet}:</p>
                  <p className="card-text">{pets.desc}</p>
                  <button
                    className="btn btn-primary col-lg-5 mx-1 mb-1 text-center"
                    onClick={() => addLike()}
                  >
                    Give like
                  </button>
                  <p className="likesp">{parseInt(pets.likes, 0)} People like this</p>
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
