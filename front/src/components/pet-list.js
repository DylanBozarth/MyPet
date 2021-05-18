import React, { useState, useEffect } from "react";
import getPetInfoService from '../services/pets';
import { Link } from "react-router-dom";
import { Searchbars } from "./searchbars";
const RestaurantsList = props => {
  const [pets, setPets] = useState([]);
  const [searchName, setSearchName ] = useState("");
  const [searchType, setSearchType ] = useState("");

  useEffect(() => {
    getPetInfo();
   
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchType = e => {
    const searchType = e.target.value;
    setSearchType(searchType);
  };

  async function getPetInfo() {
    const response = await fetch('https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook');
    const json = await response.json();
    console.log(json); 
     setPets(json.pets);
     console.log('this is pets')
     console.log(pets) 
}
{/*
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
*/}
 



 

  const find = (query, by) => {
    getPetInfo.find(query, by)
      .then(response => {
        console.log(response.data);
        setPets(response.data.restaurants);
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
  if (pets) {
    return (
<div className="row ">
  <Searchbars />
        {pets.map((pets) => {

          return (
            <div className="col-lg-4 ">
              
              <div className="card"  key={pets.name}>
                <div className="card-body">
                  <h5 className="card-title">{pets.pet}</h5>
                  <h6 className="card-title">{pets.breed}</h6><button className="btn btn-primary col-lg-5 mx-1 mb-1">Give like</button><p>{parseInt(pets.likes, 0)} People like this</p>
                  <img src={pets.image} className="img-fluid" alt={pets.pet}></img>
                  <div className="row">
                  <Link to={"/pets/"+pets._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                    View Comments
                  </Link>
                 
                  </div>
                </div>
              </div>
            </div>
          );
        })}


      </div>
    )
  }
  else {
    return ( 
      <div>App is loading</div>
    )
  }
} 
  
   

export default RestaurantsList;