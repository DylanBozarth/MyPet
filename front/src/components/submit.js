import React, { useState, useEffect } from "react";
import axios from "axios";

export const Submit = (props) => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petImage, setPetImage] = useState("");
  const [petDesc, setPetDesc] = useState('');
  
  const changePetName = (e) => {
    const searchName = e.target.value;
    setPetName(searchName);
  };
const changePetDesc = (e) => {
  const searchDesc = e.target.value 
  setPetDesc(searchDesc)
}
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
   let data = {
     pet: petName,
     breed: petBreed,
     image: petImage,
     desc: petDesc,
     user: props.user.name
   }
   
    //'https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/addnewpet'
    axios
    .post(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/addnewpet",
      data
    )
    .then((response) => {
      console.log(response);
    });
   
  }
  return (
    
    <div className="row submitpage">
      
    {(props.user !== null) ?
    <div className="col-sm-8 submitbox card">
      Submit your own
      <form onSubmit={(e) => submitPet(e)}
      >
        <label>Your pet's name</label> <br />
        <input
          placeholder="name"
          className="submitInput"
          value={petName}
          onChange={changePetName}
          required
        ></input>
        <br />
        <label>Your pet's breed</label>  <br />
        <input
          placeholder="breed"
          className="submitInput"
          value={petBreed}
          onChange={changeBreedType}
          required
        ></input>
        <br />
        <label >An image of your pet <br /> (In url format)</label> <br />
        <input
          placeholder="image URL"
          className="submitInput"
          value={petImage}
          onChange={changePetImage}
          required
        ></input>

        <br />
        <label >A fun fact about your pet</label> <br />
        <input
          placeholder="fun fact"
          className="submitInput"
          value={petDesc}
          onChange={changePetDesc}
          required
        ></input>
        <br />
        <button>Submit</button>
      </form>
     <div className="">Privacy Notice <br /> By adding your pet's photo to this website you henceforth revoke all rights in preventing me from petting your pet and referring to them as a good boy/girl. <br /> That is all. </div>
    </div> :
    <div>Please Log in first</div>}</div>
  );
};

