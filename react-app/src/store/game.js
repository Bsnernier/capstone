const GET_GAME = "game/GET_GAME";

const getGame = (game) => ({
  type: GET_GAME,
  payload: game,
});

const initialState = { game: null };

export const getAllGames = () => async (dispatch) => {
  const res = await fetch("/api/games/");

  if (res.ok) {
    const data = await res.json();
    dispatch(getGame(data));
    return data;
  }
};

export const getOneGame = (id) => async (dispatch) => {
  const res = await fetch(`/api/games/${id}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(getGame(data));
    return data;
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAME:
      return action.payload;
    default:
      return state;
  }
}
