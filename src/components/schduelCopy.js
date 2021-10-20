import DateTimePicker from "react-datetime-picker";
import { useState, useEffect } from "react";
import daniel from "../images/slideshow/1.jpg";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const Schedule = (props) => {
  const [customerName, setCustomerName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [today, setToday] = useState(new Date());
  const [work, setWork] = useState(null);
  const [date, setDate] = useState(new Date());
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showContact, setShowContact] = useState(false);
  let stringTime = new Date(date).toString();
  const [filledIn, setFilledIn] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
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
                setImage1(response.data.link)
            });
    } 
}
const uploadImage2 = (e) => {
    
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
              setImage2(response.data.link)
          });
  } 
}
const uploadImage3 = (e) => {
    
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
              setImage3(response.data.link)
          });
  } 
}

  let userData = [
    {
      Name: customerName,
      address: address,
      workType: work,
      time: date,
      imageOne: image1,
      imageTwo: image2,
      imageThree: image3,
    },
  ];
  let checkValues = () => {
    if (
      customerName !== null &&
      address !== null &&
      work !== null &&
      image1 !== null
    ) {
      setFilledIn(true);
    } else {
    }
  };
  useEffect(() => {
    console.log(userData);
    checkValues();
    NavBarChange();
  });
  const showScheduleStuff = () => {
    setShowSchedule(true);
    setShowContact(false);
  };
  const showContactStuff = () => {
    setShowSchedule(false);
    setShowContact(true);
  };
  /* submitting the data */
  const scheduleEvent = (e) => {
    e.preventDefault();

    axios.post(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/schedule/incoming_webhook/scheduleEvent",
      userData[0]
    );
    alert('Success! We will contact you shortly')
    setTimeout(() => {
      window.location.reload();
return false;
    }, 500)
    
  };
  // f46304c018d188d Client ID
  // client secret ef028328cd3b8eb42f32b5f9fafbad3b820e3f77
  /* end of submission*/
  /* change the bar animations */
  const changeTheBar = () => {
    props.setActive1(false)
    props.setActive2(false);
    props.setActive3(false);
    props.setActive4(true);
    
  }
  const resetTheBar = () => {
    props.setActive1(true)
    props.setActive2(false);
    props.setActive3(false);
    props.setActive4(false);
  }
  const NavBarChange = () => {
    ScrollTrigger.create({
      trigger: ".learn-more",
      onEnter: changeTheBar,
      //onLeave: resetTheBar,
      onEnterBack: changeTheBar,
      onLeaveBack: resetTheBar
    });
  }
  return (
    <div className="scheduleAndContact">
      <div className="buttonsContainer">
        <button class="learn-more" onClick={() => showScheduleStuff()}>
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Schedule now</span>
        </button>
        <button class="learn-more" onClick={() => showContactStuff()}>
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Contact us</span>
        </button>
      </div>

      <div id="" className={showSchedule ? `schedulePage` : `hidden`}>
        <form onSubmit={(e) => scheduleEvent(e)} className="contact-form ">
          <h3 className="standardText">Schedule your appointment </h3>
          <div className="">
            <div className="scheduleBox">
              <label type="text">Your Name: </label>
              <br />
              <input
                type="text"
                placeholder="name"
                className="schedule-inputs"
                id="img1"
                onChange={(e) => setCustomerName(e.target.value)}
              ></input>
              <br />
              <label type="text">Phone Number:</label>
              <br />
              <input
                type="Number"
                placeholder="Phone"
                className="schedule-inputs"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <br />
              <label type="text">Your Address: </label>
              <br />
              <input
                type="text"
                placeholder="Address"
                className="schedule-inputs"
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
            <label> Click to set date and time:  </label>
            <br />
            <div className="dateBox text-center">
              <DateTimePicker
                onChange={setDate}
                value={date}
                minDate={today}
                calendarClassName="dateBox"
              />
            </div>
            
          </div>
          <br />

          <label>Work Needed: </label>
          <br />
          <select name="Work needed" onChange={(e) => setWork(e.target.value)}>
            <option>Select an option </option> 
            <option value="Sprinklers">Sprinklers</option>
            <option value="Rock walls">Rock walls</option>
            <option value="Other stuff">Other stuff</option>
            <option value="Plumbing">Plumbing</option>
          </select>
          <br />
          <label type="text">Attach at least one image</label>
          <br />
          <div className="fileInputs ">
            <input
              type="file"
              id="image"
              name="First image"
              
              onChange={(e) => uploadImage(e)}
            ></input>
            <input
              type="file"
title="second image"
              onChange={(e) => uploadImage2(e)}
            ></input>
            <input
              type="file"
              title="Third image"
              onChange={(e) => uploadImage3(e)}
            ></input>
          </div>

          <div className={filledIn ? `previewBox` : `hidden`}>
            <h1 className="standardText">Does this look right?</h1>
            {userData.map((userData) => (
              <div className="previewCard">
                <h1 className="text-left">
                  {" "}
                  Your Name: <br />
                </h1>
                <h3>{userData.Name}</h3>
                We are going to: <br />
                <h3>{userData.address}</h3>
                <br />
                We will be working on: <br />
                <h3 className="standardText">{userData.workType}</h3>
                <br />
                At this date and time : <br />
                <h3 className="standardText">{stringTime}</h3>
              </div>
            ))}
          </div>
          <button
            type={filledIn ? `submit` : `button`}
            className={filledIn ? `btn btn-outline-success` : `hidden`}
          >
            Schedule
          </button>
        </form>
      </div>
      <div className={showContact ? `contactPage` : `hidden`}>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 ">
            <div className="card profile-card-1">
              <img
                src="./images/reviews/review1.jpg"
                alt="profile-sample1"
                className="background"
              />
              <img src="./images/test.png" alt="profile-image" class="profile" />
              
            </div><div className="contact-card-text">
                <h2>
                  Daniel Serna <br />
                  BossMan
                </h2>
               <b> 1-509-500-5000</b>
               <br/ >
               <b>email@email.com</b>
                
                
              </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};
