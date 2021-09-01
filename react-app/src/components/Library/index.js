import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLibraryForUser } from "../../store/library";

import "./Library.css";

function Library() {
  const [shelf, setShelf] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      let test = await dispatch(getLibraryForUser(user.id));
      setShelf(test.library);
    })();
  }, [dispatch, user.id]);

  return (
    <div className="games_container">
      {shelf?.map((game) => (
        <div>
          <div>{game?.title}</div>
          <img className="game_cover" src={game?.cover} alt="uh oh" />
          <div>Progress: {game?.status}</div>
        </div>
      ))}
    </div>
  );
}
export default Library;
