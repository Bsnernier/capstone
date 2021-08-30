import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { createOneReview } from "../../store/review";

import "./ReviewForm.css";

const ReviewForm = () => {
  const [errors, setErrors] = useState([]);
  const [text, setText] = useState();
  const [rating, setRating] = useState();

  const dispatch = useDispatch();
  let { gameId } = useParams();
  const history = useHistory();

  const submitReview = async (e) => {
    e.preventDefault();
    if (!text && !rating) {
      setErrors(["Please write a review and leave a rating before submitting"]);
      return;
    } else if (!text && rating) {
      setErrors(["Please write a review for your rating"]);
      return;
    } else if (text && !rating) {
      setErrors(["Please leave a rating with your review"]);
      return;
    }
    const data = await dispatch(createOneReview(gameId, text, rating));
    if (data) {
      setErrors(data);
      return;
    }
    console.log(errors);
    history.push("/");
    history.push(`/games/${gameId}`);
  };

  const updateText = (e) => {
    setText(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <form className="review_form" onSubmit={submitReview}>
      <div className="error_map">
        {errors?.map((error, ind) => (
          <div key={ind} className="error">
            {error}
          </div>
        ))}
      </div>
      <div>
        <label className="review_text_label" htmlFor="text">
          Write a Review
        </label>
        <input
          name="text"
          type="text"
          className="review_text_input"
          placeholder="Leave your review here."
          value={text}
          onChange={updateText}
        />
      </div>
      <div className="review_form_rating">
        <label className="review_rating_label" htmlFor="rating">
          Rating
        </label>
        <select
          name="rating"
          type="select"
          className="review_rating_input"
          placeholder="Should be Select"
          value={rating}
          onChange={updateRating}
        >
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button className="review_submit" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
