import React, {useState, useEffect} from 'react'



export const PetOfTheWeek = () => {
    const [pets, setPets] = useState([]);

    
  
    async function getPetInfo() {
      const response = await fetch(
        "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook"
      );
      const json = await response.json();
      console.log(json);
      setPets(json.pets);
      
    }
    return (
        <div className="petoftheweek-container">
            aaaa
        </div>
    )
}