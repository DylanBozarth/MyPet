import React, { useState, useEffect } from "react";
import axios from "axios";

export const Submit = (props) => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petImage, setPetImage] = useState("");
  const [petDesc, setPetDesc] = useState('');
  
  useEffect(() => {

  })
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
   
    
    axios
    .post(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/addnewpet",
      data
    )
    .then((response) => {
      alert('Sucess, check the home page for your post.')
    });
   setTimeout(function(){ window.location.replace("https://quizzical-agnesi-02d509.netlify.app/"); }, 2000);
  }
  return (
    
    <div className="row submitpage">
      <div className="col-sm-2"></div>
    {(props.user !== null) ?
    <div className="col-sm-8 submitbox ">
     <h2 className='submittext'> Submit your own</h2>
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
        <label >An image of your pet <br /> Please make sure the URL points directly to the image, otherwise the image will not work.  </label> <br />
        <input
          placeholder="image URL"
          className="submitInput"
          value={petImage}
          onChange={changePetImage}
          required
        ></input>
        {petImage ? (
          <p>Image preview: 
            <br />
            <img src={petImage} width="250px" height="300px" className="img-fluid" alt="if you see this, check your URL"></img>
          </p>
        ):
      <p></p>}

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
     <div className="submittext">Privacy Notice: <br /> By adding your pet's photo to this website you henceforth revoke all rights in preventing me from petting your pet and referring to them as a good boy/girl. <br /> That is all. </div>
    <div className="col-sm-2"></div></div> :
    <div className="text-center login">Please Log in first</div>}</div>
  );
};

