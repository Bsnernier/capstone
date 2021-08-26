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
    <div>
      {games?.map((game) => (
        <div>
          <img src={game?.cover_url} alt="uh oh" />
          <div>{game?.title}</div>
        </div>
      ))}
    </div>
  );
}
export default Games;
