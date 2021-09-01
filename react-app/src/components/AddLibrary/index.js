import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { createOneReview } from "../../store/review";

import "./AddLibrary.css";

const LibraryForm = (game) => {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState();

  const dispatch = useDispatch();
  let { gameId } = useParams();

  const submitLibrary = async (e) => {
    e.preventDefault();
    const data = await dispatch(createOneReview(gameId, status));
    if (data) {
      setErrors(data);
      return;
    }
  };

  const updateStatus = (e) => {
    setStatus(e.target.value);
  };

  const convertToThumb = (url) => {
    let split = url.split("t_cover_big");
    return split[0].concat("t_cover_small", split[1]);
  };

  return (
    <form className="library_form" onSubmit={submitLibrary}>
      <div className="error_map">
        {errors?.map((error, ind) => (
          <div key={ind} className="error">
            {error}
          </div>
        ))}
      </div>
      <img
        className="library_thumb"
        src={convertToThumb(game?.game.cover_url)}
        alt="uh oh"
      />
      <div className="library_title">{game?.game.title}</div>
      <div className="library_form_status">
        <label className="library_status_label" htmlFor="status">
          Play Status:{" "}
        </label>
        <select
          name="status"
          type="select"
          className="library_status_input"
          placeholder="Should be Select"
          value={status}
          onChange={updateStatus}
        >
          <option className="library_option">Just Purchased</option>
          <option className="library_option">Started</option>
          <option className="library_option">Halfway Through</option>
          <option className="library_option">Beat the Gam</option>
          <option className="library_option">100% Completed</option>
        </select>
      </div>
      <button className="library_submit" type="submit">
        Add to Library
      </button>
    </form>
  );
};

export default LibraryForm;
