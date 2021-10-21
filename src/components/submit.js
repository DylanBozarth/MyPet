import React, { useState, useEffect } from "react";
import axios from "axios";

export const Submit = (props) => {
  const [petName, setPetName] = useState(null);
  const [petBreed, setPetBreed] = useState(null);
  const [petImage, setPetImage] = useState(null);
  const [petDesc, setPetDesc] = useState(null);
  const [filledOut, setFilledOut] = useState(false);
  let checkArray = [petName, petBreed, petImage, petDesc];
  const changePetName = (e) => {
    const searchName = e.target.value;
    setPetName(searchName);
  };
  const uploadImage = (e) => {
    var fileIn = e.target;
    var file = fileIn.files[0];
    if (file && file.size < 5e6) {
      const formData = new FormData();

      formData.append("image", file);
      fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: "Client-ID f46304c018d188d",
          Accept: "application/json",
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          e.preventDefault();
          console.log(response);
          console.log(response.data.link); // this is where the link is stored
          setPetImage(response.data.link);
        });
    }
  };
  const changePetDesc = (e) => {
    const searchDesc = e.target.value;
    setPetDesc(searchDesc);
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
    if (checkArray.length === 4) {
      e.preventDefault();
      let data = {
        pet: petName,
        breed: petBreed,
        image: petImage,
        desc: petDesc,
        user: props.user.name,
      };

      axios
        .post(
          "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/addnewpet",
          data
        )
        .then((response) => {
          alert("Success! Redirecting you to the homepage now.");
        });
      setTimeout(function () {
        window.location.replace("https://quizzical-agnesi-02d509.netlify.app/");
      }, 2000);
    } else {
      alert("Please fill out all information");
    }
  };
  const PreventSubmission = () => {
    if (Error) {
      alert("Invalid image URL, please use another.");
      let submitButton = document.getElementById("submit");
      submitButton.classList.add("hidden");
    }
  };
  return (
    <div className="row submitpage">
      <div className="col-sm-2"></div>
      {props.user !== null ? (
        <div className="col-sm-8 submitbox ">
          <h2 className="submittext"> Submit your own</h2>
          <form onSubmit={(e) => submitPet(e)}>
            <label>Your pet's name</label> <br />
            <input
              placeholder="name"
              className="submitInput"
              value={petName}
              onChange={changePetName}
              required
            ></input>
            <br />
            <label>Your pet's breed</label> <br />
            <input
              placeholder="breed"
              className="submitInput"
              value={petBreed}
              onChange={changeBreedType}
              required
            ></input>
            <br />
            <label>
              An image of your pet <br />{" "}
            </label>{" "}
           <br />
            <input
              type="file"
              id="image"
              name="First image"
              className="text-center"
              onChange={(e) => uploadImage(e)}
            ></input>
            
            <br />
            <label>A fun fact about your pet</label> <br />
            <input
              placeholder="fun fact"
              className="submitInput"
              value={petDesc}
              onChange={changePetDesc}
              required
            ></input>
            <br />
            <button id="submit" className="btn btn-success">
              Submit
            </button>
          </form>
          <div className="submittext">
            Privacy Notice: <br /> By adding your pet's photo to this website
            you henceforth revoke all rights in preventing me from petting your
            pet and referring to them as a good boy/girl. <br /> That is all.{" "}
          </div>
          <div className="col-sm-2"></div>
        </div>
      ) : (
        <div className="text-center login">Please Log in first</div>
      )}
    </div>
  );
};
