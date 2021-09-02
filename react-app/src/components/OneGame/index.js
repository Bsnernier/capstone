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
    if (userId === user?.id) {
      libraryStatus = (
        <button
          onClick={deleteModalIsOpen ? closeDeleteModal : openDeleteModal}
          className="game_library_button game_text"
        >
          In Library
        </button>
      );
    } else {
      libraryStatus = (
        <button
          className="game_library_button game_text"
          onClick={modalIsOpen ? closeModal : openModal}
        >
          Add To Library
        </button>
      );
    }
  };

  return (
    <>
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
          closeEditModal={() => {
            closeEditModal();
          }}
        />
      </Modal>
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
    </>
  );
}
export default OneGame;
