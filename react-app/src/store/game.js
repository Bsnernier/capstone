const GET_GAME = "game/GET_GAME";

const getGame = (game) => ({
  type: GET_GAME,
  payload: game,
});

const initialState = { game: null };

export const getOneGame = () => async (dispatch) => {
  const res = await fetch("/api/games");

  if (res.ok) {
    const data = await res.json();
    console.log("res is ok --------------------", data);
    dispatch(getGame(data));
    return data;
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAME:
      return { game: action.payload };
    default:
      return state;
  }
}
