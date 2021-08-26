const GET_REVIEW = "review/GET_REVIEW";

const getReview = (review) => ({
  type: GET_REVIEW,
  payload: review,
});

const initialState = { review: null };

export const getAllReviewsPerGame = (id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/game/${id}`);
  console.log(id);

  if (res.ok) {
    const data = await res.json();
    console.log("res is ok --------------------", data);
    dispatch(getReview(data));
    return data;
  } else {
    console.log("res not ok <<<<<<<<<<<<<<<<<<<<<<<", res);
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEW:
      return action.payload;
    default:
      return state;
  }
}
