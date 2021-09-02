import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { eraseFromLibrary } from "../../store/library";

import "./LibraryDelete.css";

const LibraryDelete = ({ game, closeDeleteModal, openEditModal }) => {
  const [editDisplay, setEditDisplay] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (editDisplay) {
      closeDeleteModal();
      openEditModal();
      return;
    }
    await dispatch(eraseFromLibrary(user.id, game.id));
    history.push("/");
    history.push(`/games/${game.id}`);
  };

  return (
    <form className="delete_form" onSubmit={handleDelete}>
      <div className="delete_message">
        Would you like to edit or delete {game.title} from your Library?
      </div>
      <div className="delete_buttons">
        <button
          id="1"
          className="delete_button"
          onClick={() => setEditDisplay(true)}
        >
          Edit
        </button>
        <button id="delete" className="delete_button" type="submit">
          Delete
        </button>
        <button
          id="cancel"
          className="delete_button"
          onClick={closeDeleteModal}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default LibraryDelete;
