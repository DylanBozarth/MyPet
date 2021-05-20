import React, { useState } from "react";

export const Submit = () => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petImage, setPetImage] = useState("");
  const changePetName = (e) => {
    const searchName = e.target.value;
    setPetName(searchName);
  };

  const changeBreedType = (e) => {
    const searchType = e.target.value;
    setPetBreed(searchType);
  };
  const changePetImage = (e) => {
    const imagestuff = e.target.value;
    setPetImage(imagestuff);
  };
  const submitPet = () => {
    console.log(petName, petBreed, petImage);
  };
  return (
    <div>
      Submit your own
      <form
        className=""
        action="https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook"
        method="post"
      >
        <label>Your pet's name</label>
        <input
          placeholder="name"
          value={petName}
          onChange={changePetName}
        ></input>
        <label>Your pet's breed</label>
        <input
          placeholder="breed"
          value={petBreed}
          onChange={changeBreedType}
        ></input>
        <label>An image of your pet</label>
        <input
          placeholder="image URL"
          value={petImage}
          onChange={changePetImage}
        ></input>
        <button onClick={() => submitPet()}>Submit</button>
      </form>
    </div>
  );
};
