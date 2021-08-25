import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllGames } from "../store/game";

function Game() {
  const [games, setGames] = useState();
  const [gameIds, setGameIds] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let test = await dispatch(getAllGames());
      setGames(test.games);
      if (games) {
        // setGameIds(Object?.keys(games));
        // console.log("valuesssssssss", Object?.values(games[0]));
      }
    })();
  }, [dispatch]);

  console.log("games >>>>>>>>>>>>>>>>>>>>>>>>>>>>", games);
  console.log("gameIds >>>>>>>>>>>>>>>>>>>>>>>>>>", gameIds);

  return (
    <div>
      {games?.map((game) => (
        <div>
          <img src={game?.cover_url} alt_text="uh oh" />
          <div>{game?.title}</div>
        </div>
      ))}
    </div>
  );
}
export default Game;
