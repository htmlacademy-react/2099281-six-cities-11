import ReviewItem from '../../components/review/review';
import {CommentType} from '../../types/types';

type ReviewListProps = {
  reviews: CommentType[];
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
