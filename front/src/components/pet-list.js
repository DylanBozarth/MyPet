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


 
  const deletePet = ( _id) => {
      
     
   axios
      .delete(
        `https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/deletePet/${_id}`,
       
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      })
  
      //axios.delete('https://reqres.in/api/posts/1')
     // .then(() => console.log('all good'))
      console.log(_id)
    }
  
  if (pets && props.user) {
    return (
      // USER IS LOGGED IN
      
      <div  className="container ">
        <div className="row">
        {pets.map((pets) => {
          return (
            <div className="col-sm-4 gallery-item  text-center">
              
              <div className="" key={pets.user} id={pets._id}>
                <div className="">
                  <h3 className="gallery-text">{pets.pet}</h3>
                  <h4 className="gallery-text">{pets.breed}</h4>
                  
                 

                  <img 
                    src={pets.image}
                    className=" img-fluid gallery-image"
                    alt={pets.pet}
                    
                  ></img>
                  
                 
                  
                  <p className="gallery-text">Fun fact about {pets.pet}:</p>
                  <p className="gallery-text">{pets.desc}</p>
                  {pets.user === props.user.name ? (
        <button className="btn btn-danger" onClick={(_id) => deletePet(pets._id)}>Delete </button>
      ) : (
        <p className="gallery-text">submitted by: {pets.user}</p>
      )}
                </div>
                </div></div>
          );
        })}
      </div></div>
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
