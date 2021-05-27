import React, { useState, useEffect } from "react";

import axios from "axios";
const RestaurantsList = (props) => {
  const [pets, setPets] = useState([]);
  
  useEffect(() => {
    getPetInfo();
    
  }, []);
 

  async function getPetInfo() {
    const response = await fetch(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook"
    );
    const json = await response.json();
    console.log(json);
    setPets(json.pets);
  }


 
  const deletePet = (e, ) => {
      
    let data = {
      user: props.user
    }
     
      axios
      .delete(
        `https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/deletepet`,
       data
      )
      .then((response) => {
        console.log(response);
      });
     
    }
  
  if (pets && props.user) {
    return (
      // USER IS LOGGED IN
      <div  className="container ">
        {pets.map((pets) => {
          return (
            <div className=" col-sm-4 fall-item fall-effect text-center" key={pets.name}>
              
               
                  <h3 className="">{pets.pet}</h3>
                  <h4 className="">{pets.breed}</h4>
                  
{pets.user === props.user.name ? (
                    <button className="btn btn-danger" onClick={() => deletePet(props.user)}>Delete </button>
                  ) : (
                    <p><br /></p>
                  )} <h5 className="white">Submitted by: {pets.user}</h5>{" "}
                  <img
                    src={pets.image}
                    className=""
                    alt={pets.pet}
                  ></img>
                  <p className=" ">Fun fact about {pets.pet}:</p>
                  <p className="">{pets.desc}</p>
                  
              
            </div>
          );
        })}
      </div>
    );
  } 
  else if (pets) {
return (
  // NOT LOGGED IN
  <div className="gallery container">
  <div className="row ">
        {pets.map((pets) => {
          return (
            <div className="col-sm-4 gallery-item  text-center">
              
              <div className="" key={pets.user}>
                <div className="">
                  <h3 className="gallery-text">{pets.pet}</h3>
                  <h4 className="gallery-text">{pets.breed}</h4>
                  <p className="gallery-text">submitted by: {pets.user}</p>{" "}

                  <img 
                    src={pets.image}
                    className=" img-fluid gallery-image"
                    alt={pets.pet}
                    
                  ></img>
                  <p className="gallery-text">Fun fact about {pets.pet}:</p>
                  <p className="gallery-text">{pets.desc}</p>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div></div>
)
  }
  else {
    return <div>App is loading</div>;
  }

};

export default RestaurantsList;
