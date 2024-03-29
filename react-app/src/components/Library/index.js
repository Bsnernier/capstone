import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLibraryForUser } from "../../store/library";

import "./Library.css";

function Library() {
    const [shelf, setShelf] = useState();
    let gamesWithGenre = [];

    const genreArr = [
        "Adventure",
        "Card & Board Game",
        "Hack and slash/Beat 'em up",
        "Platform",
        "Indie",
        "Role-playing (RPG)",
        "Shooter",
        "Simulator",
        "Sport",
        "Strategy",
    ];

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        (async () => {
            let test = await dispatch(getLibraryForUser(user.id));
            setShelf(test.library);
        })();
    }, [dispatch, user.id]);

    const checkGenre = (genre) => {
        gamesWithGenre = [];
        shelf?.forEach((game) => {
            if (game?.genres.includes(genre)) {
                gamesWithGenre.push(game);
            }
        });

        if (gamesWithGenre.length === 0) {
            return " ";
        } else {
            return (
                <div id={genre} className="genre_title">
                    {genre}
                </div>
            );
        }
    };

    return (
        <div id="1" className="genres_container">
            {genreArr?.map((genre) => (
                <div id="2" className="lib_games_container" key={genre}>
                    {checkGenre(genre)}
                    <div className="card_container">
                        {gamesWithGenre
                            ? gamesWithGenre?.map((game) => (
                                  <div className="games_card" key={game?.id}>
                                      <a className="games_link" href={`/games/${game?.gameId}`}>
                                          <img className="games_image" src={game?.cover} alt="uh oh" />
                                      </a>
                                      <div className="games_title">{game?.title}</div>
                                      <div className="games_title">Progress: {game?.status}</div>
                                  </div>
                              ))
                            : " "}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Library;
