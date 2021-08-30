import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { editReview } from "../../store/review";

import "./ReviewEditForm.css";

const ReviewEditForm = ({ review, hideForm }) => {
  const [errors, setErrors] = useState([]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState();

  const dispatch = useDispatch();
  let { gameId } = useParams();
  const history = useHistory();

  useEffect(() => {
    setText(review?.text);
    setRating(review?.rating);
  }, []);

  const submitEditReview = async (e) => {
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
    } else if (text.length > 255) {
      setErrors([
        `Your review is ${text.length} chacters in length. Please shorten to 255 or less.`,
      ]);
      return;
    }
    const data = await dispatch(editReview(review?.id, text, rating));
    if (data) {
      setErrors(data);
    }
    hideForm();
  };

  const updateText = (e) => {
    setText(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <form className="edit_form" onSubmit={submitEditReview}>
      <div className="error_map">
        {errors?.map((error, ind) => (
          <div key={ind} className="error_edit">
            {error}
          </div>
        ))}
      </div>
      <div className="edit_text">
        <label className="edit_text_label" htmlFor="text"></label>
        <input
          name="text"
          type="text"
          className="edit_text_input"
          placeholder="Write here"
          value={text}
          onChange={updateText}
        />
      </div>
      <div className="edit_rating">
        <label className="edit_rating_label" htmlFor="rating">
          Rating
        </label>
        <select
          name="rating"
          type="select"
          className="edit_rating_input"
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
        <button className="edit_submit" type="submit">
          Update
        </button>
      </div>
    </form>
  );
};

export default ReviewEditForm;
