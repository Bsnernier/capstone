import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllGames } from "../../store/game";

import "./Games.css";

function Games() {
  const [games, setGames] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let test = await dispatch(getAllGames());
      setGames(test.games);
    })();
  }, [dispatch]);

  return (
    <div className="games_container">
      {games?.map((game) => (
        <div>
          <a className="games_link" href={`/games/${game?.id}`}>
            <img className="games_image" src={game?.cover_url} alt="uh oh" />
          </a>
          <div className="games_title">{game?.title}</div>
        </div>
      ))}
    </div>
  );
}
export default Games;
