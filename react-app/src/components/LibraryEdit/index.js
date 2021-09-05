import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateLibrary } from "../../store/library";

import "./LibraryEdit.css";

const LibraryEdit = ({ game }) => {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const editLibrary = async (e) => {
    e.preventDefault();
    if (status === undefined) {
      setErrors(["Not a valid choice"]);
      return;
    }
    const data = await dispatch(updateLibrary(user.id, game.libraryId, status));
    if (data) {
      setErrors(data);
      return;
    } else {
      history.goBack();
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
    <form className="library_form" onSubmit={editLibrary}>
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
      <button className="library_submit basic-button" type="submit">
        Edit status
      </button>
      <div className="error_map_modal">
        {errors?.map((error, ind) => (
          <div key={ind} className="error_modal">
            {error}
          </div>
        ))}
      </div>
    </form>
  );
};
export default LibraryEdit;
