import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllReviewsPerGame } from "../store/review";

function Review(props) {
  const [reviews, setReviews] = useState();

  const dispatch = useDispatch();
  console.log("gameIdddddddddddddddddddd", props.gameId);

  useEffect(() => {
    (async () => {
      let test = await dispatch(getAllReviewsPerGame(props.gameId));
      setReviews(test);
    })();
  }, [dispatch]);

  if (reviews) {
    console.log("reviewwwwwwwwsssssssssssssssssss", reviews);
  }

  return <div>Hello</div>;
}
export default Review;
