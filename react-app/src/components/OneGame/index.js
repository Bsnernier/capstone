import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

import Review from "../Review";
import ReviewForm from "../ReviewForm";
import LibraryAdd from "../LibraryAdd";
import LibraryDelete from "../LibraryDelete";
import LibraryEdit from "../LibraryEdit";

import { getOneGame } from "../../store/game";

import "./OneGame.css";

function OneGame() {
  const [game, setGame] = useState();

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [deleteModalIsOpen, setDeleteIsOpen] = useState(false);
  function openDeleteModal() {
    setDeleteIsOpen(true);
  }
  function closeDeleteModal() {
    setDeleteIsOpen(false);
  }

  const [editIsOpen, setEditIsOpen] = useState(false);
  function openEditModal() {
    setEditIsOpen(true);
  }
  function closeEditModal() {
    setEditIsOpen(false);
  }

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
    let libraryUserIds = [];
    let userLibraryStatus = [];
    game?.libraries.forEach((library) => {
      libraryUserIds.push(library.userId);
      userLibraryStatus.push(library.status);
    });
    if (libraryUserIds.includes(user?.id)) {
      libraryStatus = (
        <div className="game_library_div">
          <button
            onClick={deleteModalIsOpen ? closeDeleteModal : openDeleteModal}
            className="game_library_button game_text basic-button"
          >
            In Library
          </button>
          <div className="user_library_status">
            Status: {userLibraryStatus[0]}
          </div>
        </div>
      );
    } else {
      libraryStatus = (
        <button
          className="game_library_button game_text basic-button"
          onClick={modalIsOpen ? closeModal : openModal}
        >
          Add To Library
        </button>
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="game">
          <img className="game_cover" src={game?.cover_url} alt="uh oh" />
          <table className="game_table">
            <tbody>
              <tr className="game_table">
                <td className="game_title game_text">{game?.title}</td>
              </tr>
              <tr className="game_table">
                {checkLibrary(game?.library_user)}
                <td className="game_library game_text">{libraryStatus}</td>
              </tr>
              <tr className="game_table">
                <td className="game_date game_text">
                  Initially Released: {toDateTime(game?.first_release_date)}
                </td>
              </tr>
              <tr className="game_table">
                <td className="game_genre game_text">Genres: {game?.genre}</td>
              </tr>
              <tr className="game_table">
                <td className="game_platforms game_text">
                  Platforms: {game?.platforms}
                </td>
              </tr>
              <tr className="game_table">
                <td className="game_storyline game_text">
                  Storyline: {game?.storyline}
                </td>
              </tr>
              <tr className="game_table">
                <td className="game_summary game_text">
                  Summary: {game?.summary}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="game_review">
          <div className="game_review_container">
            <Review className="game_review_component" gameId={gameId} />
            <ReviewForm className="game_review_form" gameId={gameId} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="library-modal"
        overlayClassName="library-modal__overlay"
        ariaHideApp={false}
      >
        <LibraryAdd game={game} closeModal={closeModal} />
      </Modal>
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        className="library-modal"
        overlayClassName="library-modal__overlay"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <LibraryDelete
          game={game}
          closeDeleteModal={() => {
            closeDeleteModal();
          }}
          openEditModal={() => {
            openEditModal();
          }}
        />
      </Modal>
      <Modal
        isOpen={editIsOpen}
        onRequestClose={closeEditModal}
        className="library-modal"
        overlayClassName="library-modal__overlay"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <LibraryEdit
          game={game}
          libraries={game?.libraries}
          closeEditModal={() => {
            closeEditModal();
          }}
        />
      </Modal>
    </>
  );
}
export default OneGame;
