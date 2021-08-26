import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllReviewsPerGame } from "../store/review";

function Review(props) {
  const [reviews, setReviews] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let test = await dispatch(getAllReviewsPerGame(props.gameId));
      setReviews(test.reviews);
    })();
  }, [dispatch, props.gameId]);

  return (
    <div>
      {reviews?.map((review) => (
        <div key={review?.id}>
          <div>{review?.text}</div>
          <div>{review?.rating}</div>
        </div>
      ))}
    </div>
  );
}
export default Review;
