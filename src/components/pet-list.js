import React, { useState, useEffect } from "react";
import axios from "axios";
import { gsap } from "gsap";
const RestaurantsList = (props) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPetInfo();
  }, []);
  useEffect(() => {
    if (pets) {
      MoveItMoveIt();
    }
    
  }, [pets]);

  async function getPetInfo() {
    const response = await fetch(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook"
    );
    const json = await response.json();
    console.log(json);
    setPets(json.pets);
    
  }
  const MoveItMoveIt = () => {
    
    gsap.from(".flip", {
      delay: 0.4,
      duration: 3,
      y: 110,
      ease: "elastic(1, 0.5)",
      stagger: "0.4",
    });
  };
  const deletePet = (_id) => {
    axios
      .delete(
        `https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/deletePet?_id=${_id}`
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

    //axios.delete('https://reqres.in/api/posts/1')
    // .then(() => console.log('all good'))
  };

  if (pets && props.user) {
    return (
      // USER IS LOGGED IN

      <div className="container ">
        <div className="row">
          {pets.map((pets) => {
            return (
              <div class="flip col-sm-4">
                <div
                  class="front"
                  style={{ backgroundImage: `url(${pets.image})` }}
                >
                  <h1 class="text-shadow">{pets.pet}</h1>
                </div>
                <div class="back">
                  <h2>
                    {pets.pet}, {pets.breed}
                  </h2>
                  {pets.user === props.user.name ? (
                    <button
                      className="btn btn-danger"
                      onClick={(_id) => deletePet(pets._id)}
                    >
                      Delete{" "}
                    </button>
                  ) : (
                    <p className="gallery-text">submitted by: {pets.user}  </p>
                  )}
                  <p>{pets.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pets) {
    return (
      // NOT LOGGED IN
      <div className="gallery container">
        <div className="row ">
          {pets.map((pets) => {
            return (
              <div class="flip col-sm-4">
                <div
                  class="front"
                  style={{ backgroundImage: `url(${pets.image})` }}
                >
                  <h1 class="text-shadow">{pets.pet}</h1>
                </div>
                <div class="back">
                  <h2>
                    {pets.pet}, {pets.breed}
                  </h2>
                  <p>{pets.desc}</p>
                  <br /><p className="gallery-text">submitted by: {pets.user}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>App is loading</div>;
  }
};

export default RestaurantsList;
