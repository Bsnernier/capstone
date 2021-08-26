const GET_REVIEW = "review/GET_REVIEW";
const CREATE_REVIEW = "review/CREATE_REVIEW";
const UPDATE_REVIEW = "review/UPDATE_REVIEW";
const DELETE_REVIEW = "review/DELETE_REVIEW";

const getReview = (review) => ({
  type: GET_REVIEW,
  payload: review,
});

const createReview = (review) => ({
  type: CREATE_REVIEW,
  payload: review,
});

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  payload: review,
});

const deleteReview = () => ({
  type: DELETE_REVIEW,
});

const initialState = { review: null };

export const getAllReviewsPerGame = (id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/game/${id}`);

  if (res.ok) {
    const data = await res.json();
    console.log("res is ok --------------------", data);
    dispatch(getReview(data));
    return data;
  } else {
    console.log("res not ok <<<<<<<<<<<<<<<<<<<<<<<", res);
  }
};

export const createOneReview = (id, text, rating) => async (dispatch) => {
  const res = await fetch(`/api/reviews/game/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      rating,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    console.log("res is ok --------------------", data);
    dispatch(createReview(data));
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

export const editReview = (id, text, rating) => async (dispatch) => {
  let formData = new FormData();
  formData.append("reviewId", id);
  formData.append("text", text);
  formData.append("rating", rating);

  const res = await fetch(`/api/reviews/game/${id}/edit`, {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    console.log("res is ok --------------------", data);
    dispatch(updateReview(data));
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

export const eraseReview = (id) => async (dispatch) => {
  let formData = new FormData();
  formData.append("reviewId", id);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>", id);

  const res = await fetch(`/api/reviews/game/${id}/delete`, {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    console.log("dataaaaaaaaaaaaaaaaaaaaaaaa", data);
    dispatch(deleteReview(data));
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
    case GET_REVIEW:
      return action.payload;
    case CREATE_REVIEW:
      return action.payload;
    case UPDATE_REVIEW:
      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_REVIEW:
      return state;
    default:
      return state;
  }
}
