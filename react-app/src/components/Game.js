import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOneGame } from "../store/game";

function Game() {
  const [game, setGame] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  console.log("userrrrrrrrrrrrrrrrr", user);

  useEffect(() => {
    (async () => {
      let test = await dispatch(getOneGame());
      setGame(test);
      console.log("asdfgggggdddddddddddddddddddddddddddd", test);
    })();
  }, [dispatch, game]);

  // console.log("asdfgggggdddddddddddddddddddddddddddd");

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`/api/games`);
  //     const game = await response.json();
  //     console.log(game);
  //   })();
  // }, []);

  return (
    <ul>
      <li>
        <strong>User Id</strong> {game}
      </li>
      <li>
        <strong>Username</strong>
      </li>
      <li>
        <strong>Email</strong>
      </li>
    </ul>
  );
}
export default Game;
