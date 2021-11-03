import React, {useState, useEffect} from 'react'



export const PetOfTheWeek = () => {
    const [pets, setPets] = useState([]);
    const [randomNum, setRandomNum] = useState()

    useEffect(() => {
      getPetInfo()
    }, [])
  
    async function getPetInfo() {
      const response = await fetch(
        "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook"
      );
      const json = await response.json();
      
      let luckyPet = json.pets.slice(2, 3) 

      setPets(luckyPet);
      
    
    let findRandomIndex = () => {
      /* find a way for this to run once a week, profit */
let petLength = json.pets.length
      console.log(petLength)
setRandomNum(Math.floor(Math.random() * petLength))

    }

    findRandomIndex()
  }
    
    if (pets) {
       return (
        <div className="container-fluid weeklyPetBox">
       
         {pets.map((pets) => {
            return (
              <div>
                <img src={pets.image} alt={pets.name} />
                </div>
            );
          })}
      </div>
    )
    }
    else return (
      <div>loading</div>
    )
   
}