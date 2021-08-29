import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllReviewsPerGame } from "../../store/review";
import ReviewEditForm from "../ReviewEditForm";
import ReviewDelete from "../ReviewDelete";

import "./Review.css";

function Review(props) {
  const [reviews, setReviews] = useState();
  const [editFormDisplay, setEditFormDisplay] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      let test = await dispatch(getAllReviewsPerGame(props.gameId));
      setReviews(test.reviews);
    })();
  }, [dispatch, props.gameId, editFormDisplay]);

  let editButton = null;
  let deleteButton = null;
  let editContent = null;

  const showButton = (reviewUserId, reviewId) => {
    editButton = null;
    deleteButton = null;
    if (user?.id === reviewUserId) {
      editButton = (
        <button
          className="review_button"
          onClick={(e) => {
            setEditFormDisplay(e.target.id);
          }}
          id={reviewId}
        >
          Edit
        </button>
      );
      deleteButton = <ReviewDelete reviewId={reviewId} gameId={props.gameId} />;
    }
  };

  const showEditContent = (review, reviewId) => {
    if (parseInt(editFormDisplay) === reviewId && review?.userId === user?.id) {
      return (editContent = (
        <ReviewEditForm
          review={review}
          hideForm={() => setEditFormDisplay(false)}
        />
      ));
    }
  };

  return (
    <div className="review">
      {reviews?.map((review) => (
        <div className="review_content" key={review?.id}>
          <div className="review_user_rating">
            <div className="review_username">{review?.username}</div>
            <div className="review_rating">Rating: {review?.rating}</div>
          </div>
          <div className="review_text">{review?.text}</div>
          <div className="review_buttons">
            {showButton(review?.userId, review?.id)}
            {editButton}
            {deleteButton}
            {/* {showEditContent(review, review?.id)} */}
          </div>
          {showEditContent(review, review?.id)}
        </div>
      ))}
    </div>
  );
}
export default Review;
