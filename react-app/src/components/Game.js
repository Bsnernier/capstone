import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOneGame } from "../store/game";

function Game() {
  const [game, setGame] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getOneGame());
    (async () => {
      let test = await dispatch(getOneGame());
      setGame(test.games[0][1]);
      console.log("asdfgggggdddddddddddddddddddddddddddd", game);
    })();
  }, [dispatch]);

  return (
    <div>
      <div>{game?.title}</div>
      <div>{game?.summary}</div>
      <div>{game?.description}</div>
      <img src={game?.cover_url} alt_text="uh oh" />
    </div>
  );
}
export default Game;
