import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLibraryForUser } from "../../store/library";

import "./Library.css";

function Library() {
  const [shelf, setShelf] = useState();
  const [genreWithArr, setGenreWithArr] = useState();

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
      {console.log(shelf)}
      <div>Adventure</div>
      {shelf?.map((game) => (
        <div className="games_card" key={game?.id}>
          <a className="games_link" href={`/games/${game?.gameId}`}>
            <img className="games_image" src={game?.cover} alt="uh oh" />
          </a>
          <div className="games_title">{game?.title}</div>
          <div className="games_title">Progress: {game?.status}</div>
        </div>
      ))}
    </div>
  );
}
export default Library;
