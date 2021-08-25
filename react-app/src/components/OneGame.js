import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getOneGame } from "../store/game";

function OneGame() {
  const [game, setGame] = useState();

  const dispatch = useDispatch();
  let { gameId } = useParams();

  useEffect(() => {
    (async () => {
      let test = await dispatch(getOneGame(gameId));
      setGame(test[gameId]);
    })();
  }, [dispatch]);

  if (game) console.log("games >>>>>>>>>>>>>>>>>>>>>>>>>>>>", game);

  return (
    <div>
      <img src={game?.cover_url} alt_text="uh oh" />
      <div>{game?.title}</div>
      <div>{game?.genre}</div>
      <div>{game?.description}</div>
      <div>{game?.summary}</div>
    </div>
  );
}
export default OneGame;
