import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getOneGame } from "../store/game";

function Review() {
  const [game, setGame] = useState();

  const dispatch = useDispatch();
  let { gameId } = useParams();
  console.log("gameIdddddddddddddddddddd", gameId);

  // useEffect(() => {
  //   (async () => {
  //     let test = await dispatch(getReview(gameId));
  //     setGame(test[gameId]);
  //   })();
  // }, [dispatch]);

  // if (game) console.log("games >>>>>>>>>>>>>>>>>>>>>>>>>>>>", game);

  return <div>Hello</div>;
}
export default Review;
