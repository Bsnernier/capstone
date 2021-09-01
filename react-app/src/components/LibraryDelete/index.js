import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { eraseFromLibrary } from "../../store/library";

import "./LibraryDelete.css";

const LibraryDelete = ({ game, closeDeleteModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(eraseFromLibrary(user.id, game.id));
    history.push("/");
    history.push(`/games/${game.id}`);
  };

  return (
    <form
      className="delete_form"
      onSubmit={handleDelete}
      onReset={() => history.push(`/games/${game.id}`)}
    >
      <div className="delete_message">
        Are You sure you wish to delete {game.title} from your Library?
      </div>
      <div className="delete_buttons">
        <button className="delete_button" type="submit">
          Delete
        </button>
        <button className="delete_button" onClick={closeDeleteModal}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default LibraryDelete;
