import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Review from "./Review";

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
  }, [dispatch, gameId]);

  const toDateTime = (seconds) => {
    let time = new Date(1970, 0, 1);
    time.setSeconds(parseInt(seconds));
    const [month, date, year] = [
      time.getMonth(),
      time.getDate(),
      time.getFullYear(),
    ];
    return `${month}-${date}-${year}`;
  };

  return (
    <div>
      <img src={game?.cover_url} alt="uh oh" />
      <div>{toDateTime(game?.first_release_date)}</div>
      <div>{game?.title}</div>
      <div>{game?.genre}</div>
      <div>{game?.platforms}</div>
      <div>{game?.storyline}</div>
      <div>{game?.summary}</div>
      <Review gameId={gameId} />
    </div>
  );
}
export default OneGame;
