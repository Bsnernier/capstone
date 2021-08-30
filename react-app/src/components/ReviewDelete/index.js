import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { eraseReview } from "../../store/review";

const ReviewDelete = ({ reviewId, gameId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(eraseReview(reviewId));
    history.push("/");
    history.push(`/games/${gameId}`);
  };

  return (
    <form onSubmit={handleDelete}>
      <button className="review_button" type="submit">
        Delete
      </button>
    </form>
  );
};

export default ReviewDelete;
