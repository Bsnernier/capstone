const GET_LIBRARY = "library/GET_LIBRARY";

const getLibrary = (library) => ({
  type: GET_LIBRARY,
  payload: library,
});

const initialState = { library: null };

export const getLibraryForUser = (id) => async (dispatch) => {
  const res = await fetch(`/api/library/users/${id}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(getLibrary(data));
    return data;
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIBRARY:
      return action.payload;
    default:
      return state;
  }
}
