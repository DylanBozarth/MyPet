import React, { useState, useEffect } from "react";
import ImageGallery from 'react-image-gallery';
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

  const deletePet = (_id) => {
    axios
      .delete(
        `https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/deletePet?_id=${_id}`,
      
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
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  if (pets && props.user) {
    return (
      // USER IS LOGGED IN

      <div className="container ">
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
                      <button
                        className="btn btn-danger"
                        onClick={(_id) => deletePet(pets._id)}
                      >
                        Delete{" "}
                      </button>
                    ) : (
                      <p className="gallery-text">submitted by: {pets.user}</p>
                    )}
                  </div>
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
              <ImageGallery items={images} />
              
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
