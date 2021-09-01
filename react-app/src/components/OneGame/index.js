import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Review from "../Review";
import ReviewForm from "../ReviewForm";

import { getOneGame } from "../../store/game";

import "./OneGame.css";

function OneGame() {
  const [game, setGame] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  let { gameId } = useParams();

  let libraryStatus = null;

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

  const checkLibrary = (userId) => {
    if (userId === user?.id) {
      libraryStatus = (
        <div className="game_library_button game_text">In Library</div>
      );
    } else {
      libraryStatus = (
        <button className="game_library_button game_text">
          Add To Library
        </button>
      );
    }
  };

  return (
    <div className="container">
      <div className="game">
        <img className="game_cover" src={game?.cover_url} alt="uh oh" />
        <div className="game_title game_text">{game?.title}</div>
        {checkLibrary(game?.library_user)}
        {libraryStatus}
        <div className="game_date game_text">
          Initially Released: {toDateTime(game?.first_release_date)}
        </div>
        <div className="game_genre game_text">Genres: {game?.genre}</div>
        <div className="game_platforms game_text">
          Platforms: {game?.platforms}
        </div>
        <div className="game_storyline game_text">
          Storyline: {game?.storyline}
        </div>
        <div className="game_summary game_text">Summary: {game?.summary}</div>
      </div>
      <div className="game_review">
        <div className="game_review_container">
          <Review className="game_review_component" gameId={gameId} />
          <ReviewForm className="game_review_form" gameId={gameId} />
        </div>
      </div>
    </div>
  );
}
export default OneGame;
