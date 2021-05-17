import React, { useState, useEffect } from "react";
import getPet from "../services/pets";
import { Link } from "react-router-dom";
import http from "../http-common";
const PetFocus = props => {
  const initialState = {
    id: null,
    name: "",
    type: "",
    reviews: []
  };
  const [pet, setPet] = useState(initialState);

  const getRestaurant = id => {
   getPetsId(id)
      .then(response => {
        setPet(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const getPetsId = (id) => {
    return http.get(`/pets?id=${id}`);
    
  }
  useEffect(() => {
    getRestaurant(props.match.params.id);
    
  }, [props.match.params.id]);

  const deleteReview = (reviewId, index) => {
    getPet.deleteReview(reviewId, props.user.id)
      .then(response => {
        setPet((prevState) => {
          prevState.reviews.splice(index, 1)
          return({
            ...prevState
          })
        })
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {pet ? (
        <div>
          <h5>{pet.name}</h5>
          <p>
           Description
          </p>
          <Link to={"/" } className="btn btn-primary">
            Back
          </Link>
          <Link to={"/pet" + props.match.params.id + "/review"} className="btn btn-primary">
            Add Review
          </Link>
          
          <h4> Reviews </h4>
          <div className="row">
            {pet.reviews.length > 0 ? (
             pet.reviews.map((review, index) => {
               return (
                 <div className="col-lg-4 pb-1" key={index}>
                   <div className="card">
                     <div className="card-body">
                       <p className="card-text">
                         {review.text}<br/>
                         <strong>User: </strong>{review.name}<br/>
                         <strong>Date: </strong>{review.date}
                       </p>
                       {props.user && props.user.id === review.user_id &&
                          <div className="row">
                            <a onClick={() => deleteReview(review._id, index)} className="btn btn-primary col-lg-5 mx-1 mb-1">Delete</a>
                            <Link to={{
                              pathname: "/pet/" + props.match.params.id + "/review",
                              state: {
                                currentReview: review
                              }
                            }} className="btn btn-primary col-lg-5 mx-1 mb-1">Edit</Link>
                          </div>                   
                       }
                     </div>
                   </div>
                 </div>
               );
             })
            ) : (
            <div className="col-sm-4">
              <p>No comments yet. maybe</p>
            </div>
            )}

          </div>

        </div>
      ) : (
        <div>
          <br />
          <p>No restaurant selected.</p>
        </div>
      )}
    </div>
  );
};

export default PetFocus;