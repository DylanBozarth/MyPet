import React, { useState } from "react";

export const Submit = (props) => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petImage, setPetImage] = useState("");
  let userPutInThisData = {
    petName, petBreed, petImage
  }
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
   
    var data = {
      text: userPutInThisData,
      name: props.user,
      
     // restaurant_id: props.match.params.id
    };
  
    fetch('https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/addnewpet'
      , {
      method: "POST",
      body: JSON.Stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json));
  };
  return (
    <div className="row">
      
    {(props.user !== null) ?
    <div className="col-sm-6 submitbox">
      Submit your own
      <div
      >
        <label>Your pet's name</label> <br />
        <input
          placeholder="name"
          className="submitInput"
          value={petName}
          onChange={changePetName}
        ></input>
        <br />
        <label>Your pet's breed</label>  <br />
        <input
          placeholder="breed"
          className="submitInput"
          value={petBreed}
          onChange={changeBreedType}
        ></input>
        <br />
        <label >An image of your pet</label> <br />
        <input
          placeholder="image URL"
          className="submitInput"
          value={petImage}
          onChange={changePetImage}
        ></input>
        <br />
        <button onClick={(e) => submitPet(e)}>Submit</button>
      </div>
     
    </div> :
    <div>Log in bro</div>}<div className="col-sm-4">Privacy Notice <br /> By adding your pet's photo to this website you henceforth revoke all rights in preventing me from petting your pet and referring to them as a good boy/girl. <br /> That is all. </div></div>
  );
};

