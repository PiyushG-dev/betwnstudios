import React from "react";

const Review = ({ params }) => {
  return (
    <div>
      Review {params.reviewId} for product {params.id}
    </div>
  );
};

export default Review;
