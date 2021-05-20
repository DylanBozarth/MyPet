import React, { useState } from "react";

export const Submit = (props) => {
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
  const submitPet = (e) => {
    e.preventDefault();
   //('https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/addnewpet')
    let _data = {
      
      body: petName,
     
    }
    
    fetch('https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/addnewpet'
      , {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json));
  };
  return (
    <div className="row">
      
    {(props.user !== null) ?
    <div className="col-sm-6">
      Submit your own
      <div
      >
        <label>Your pet's name</label> <br />
        <input
          placeholder="name"
          value={petName}
          onChange={changePetName}
        ></input>
        <br />
        <label>Your pet's breed</label>  <br />
        <input
          placeholder="breed"
          value={petBreed}
          onChange={changeBreedType}
        ></input>
        <br />
        <label>An image of your pet</label> <br />
        <input
          placeholder="image URL"
          value={petImage}
          onChange={changePetImage}
        ></input>
        <br />
        <button onClick={(e) => submitPet(e)}>Submit</button>
      </div>
     
    </div> :
    <div>Log in bro</div>}<div className="col-sm-6">Privacy Notice</div></div>
  );
};

