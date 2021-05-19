import React, { useState } from "react";

export const Submit = () => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petImage, setPetImage] = useState("");

  const submitPet = () => {
   console.log('a')
    
  }
  return (
    <div>
      Submit your own
      <form className="" action="https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook" method="post">
        <label>Your pet's name</label>
        <input placeholder="name" value={petName} onChange={setPetName}></input>
        <label>Your pet's breed</label>
        <input
          placeholder="breed"
          value={petBreed}
          onChange={setPetBreed}
        ></input>
        <label>An image of your pet</label>
        <input placeholder="image URL"  value={petImage}
            onChange={setPetImage}></input>
        <button onClick={() => console.log("yes")}>Submit</button>
      </form>
    </div>
  );
};
