import starEmptySVG from '../../assets/svg/star-s-line.svg';
import starFilledSVG from '../../assets/svg/star-s-fill.svg';
import starHalfSVG from '../../assets/svg/star-half-s-fill.svg';

/* need to display 5 stars
how many are filled depends on rating
can math.floor to find how many are filled, subtract from 5 to get empty
to get half, get decimal and do comparison
*/

const Rating = ({ rating, reviewCount }) => {
  const numOfFilledStars = Math.floor(rating);
  const decimal = rating - Math.floor(rating);
  const numOfHalfStars = decimal >= 0.4 ? 1 : 0;
  const numOfEmptyStars = 5 - numOfFilledStars - numOfHalfStars;

  return (
    <div className="rating-wrapper">
      <div className="stars-wrapper">
        {Array(numOfFilledStars).fill(
          <span className="star-filled-svg">
            <img src={starFilledSVG} alt="" />
          </span>
        )}
        {Array(numOfHalfStars).fill(
          <span className="star-half-svg">
            <img src={starHalfSVG} alt="" />
          </span>
        )}{' '}
        {Array(numOfEmptyStars).fill(
          <span className="star-empty-svg">
            <img src={starEmptySVG} alt="" />
          </span>
        )}
      </div>
      <div className="review_count-wrapper">({reviewCount})</div>
    </div>
  );
};

export default Rating;
