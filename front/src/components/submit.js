import React, { useState } from "react";

export const Submit = (props) => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petImage, setPetImage] = useState("");
  const [petDesc, setPetDesc] = useState('');
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
   let data = {
     pet: petName,
     breed: petBreed,
     image: petImage

   }
   
   
  
  }
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
        <label >A fun fact about your pet</label> <br />
        <input
          placeholder="fun fact"
          className="submitInput"
          value={petDesc}
          onChange={setPetDesc}
        ></input>
        <button onClick={(e) => submitPet(e)}>Submit</button>
      </div>
     <div className="col-sm-4">Privacy Notice <br /> By adding your pet's photo to this website you henceforth revoke all rights in preventing me from petting your pet and referring to them as a good boy/girl. <br /> That is all. </div>
    </div> :
    <div>Log in bro</div>}</div>
  );
};

