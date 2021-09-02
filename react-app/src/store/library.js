const GET_LIBRARY = "library/GET_LIBRARY";
const ADD_LIBRARY = "library/ADD_LIBRARY";
const EDIT_LIBRARY = "library/EDIT_LIBRARY";
const DELETE_LIBRARY = "library/DELETE_LIBRARY";

const getLibrary = (library) => ({
  type: GET_LIBRARY,
  payload: library,
});

const addLibrary = (library) => ({
  type: ADD_LIBRARY,
  payload: library,
});

const editLibrary = (library) => ({
  type: EDIT_LIBRARY,
  payload: library,
});

const deleteLibrary = () => ({
  type: DELETE_LIBRARY,
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

export const addGameToLibrary = (id, gameId, status) => async (dispatch) => {
  let formData = new FormData();
  formData.append("userId", id);
  formData.append("gameId", gameId);
  formData.append("status", status);

  const res = await fetch(`/api/library/users/${id}`, {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addLibrary(data));
    return null;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const updateLibrary = (id, libraryId, status) => async (dispatch) => {
  let formData = new FormData();
  formData.append("libraryId", libraryId);
  formData.append("status", status);

  const res = await fetch(`/api/library/users/${id}/edit`, {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(editLibrary(data));
    return null;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const eraseFromLibrary = (userId, gameId) => async (dispatch) => {
  let formData = new FormData();
  formData.append("userId", userId);
  formData.append("gameId", gameId);

  const res = await fetch(`/api/library/users/${userId}/delete`, {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(deleteLibrary(data));
    return null;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIBRARY:
      return action.payload;
    case ADD_LIBRARY:
      return action.payload;
    case EDIT_LIBRARY:
      return action.payload;
    case DELETE_LIBRARY:
      return state;
    default:
      return state;
  }
}
