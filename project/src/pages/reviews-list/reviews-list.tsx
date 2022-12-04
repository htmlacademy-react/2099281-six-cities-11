import ReviewItem from '../../components/review/review';
import {ReviewType} from '../../types/types';

type ReviewListProps = {
  reviews: ReviewType[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {
        reviews.map((review) => (
          <ReviewItem review={review} key={review.id}/>
        ))
      }
    </ul>
  );
}

export default ReviewList;
