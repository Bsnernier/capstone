import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addGameToLibrary } from "../../store/library";

import "./LibraryAdd.css";

const LibraryForm = ({ game, closeModal }) => {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const gameId = game?.id;

  const submitLibrary = async (e) => {
    e.preventDefault();
    const data = await dispatch(addGameToLibrary(user.id, gameId, status));
    if (data) {
      setErrors(data);
      return;
    } else {
      closeModal();
      history.push("/");
      history.push(`/games/${gameId}`);
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
      <img
        className="library_thumb"
        src={convertToThumb(game?.cover_url)}
        alt="uh oh"
      />
      <div className="library_title">{game?.title}</div>
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
          <option className="library_option"></option>
          <option className="library_option">Just Purchased</option>
          <option className="library_option">Started</option>
          <option className="library_option">Halfway Through</option>
          <option className="library_option">Beat the Game</option>
          <option className="library_option">100% Completed</option>
        </select>
      </div>
      <div className="error_map_modal">
        {errors?.map((error, ind) => (
          <div key={ind} className="error_modal">
            {error}
          </div>
        ))}
      </div>
      <button className="library_submit" type="submit">
        Add to Library
      </button>
    </form>
  );
};

export default LibraryForm;
