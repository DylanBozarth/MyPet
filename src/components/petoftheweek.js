import React, {useState, useEffect} from 'react'



export const PetOfTheWeek = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
      getPetInfo()
      
    }, [])
  
    async function getPetInfo() {
      const response = await fetch(
        "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook"
      );
      const json = await response.json();
      setPets(json.pets);
      
    }
    const selectPet = () => {
      let petLength = pets.length
      
    }
    if (pets) {
       return (
        <div className="gallery container">
        <div className="row ">
          {pets.filter((x) => x.pet ).map((pets) => {
            return (
              <div className="flip col-sm-4" key={pets.name}>
                <div
                  className="front"
                  style={{ backgroundImage: `url(${pets.image})` }}
                >
                  <h1 className="text-shadow">{pets.pet}</h1>
                </div>
                <div className="back">
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
    )
    }
    else return (
      <div>loading</div>
    )
   
}