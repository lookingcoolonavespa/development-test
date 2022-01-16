import { getUniqueKey } from '../../logic/helperFuncs';

import starEmptySVG from '../../assets/svg/star-s-line.svg';
import starFilledSVG from '../../assets/svg/star-s-fill.svg';
import starHalfSVG from '../../assets/svg/star-half-s-fill.svg';

/* need to display 5 stars
how many are filled depends on rating
can math.floor to find how many are filled, subtract from 5 to get empty stars
to get half star, get decimal and do comparison
*/

const Rating = ({ rating, reviewCount }) => {
  const numOfFilledStars = Math.floor(rating);
  const decimal = rating - Math.floor(rating);
  const numOfHalfStars = decimal >= 0.4 ? 1 : 0;
  const numOfEmptyStars = 5 - numOfFilledStars - numOfHalfStars;

  return (
    <div className="rating-wrapper">
      <div className="stars-wrapper">
        {[
          [...Array(numOfFilledStars)].map(
            // create arrays to display stars
            // map instead of fill to get unique keys for each div
            () => {
              return (
                <div key={`a${getUniqueKey()}`} className="star-svg-wrapper">
                  <img src={starFilledSVG} alt="filled rating star" />
                </div>
              );
            }
          ),
          [...Array(numOfHalfStars)].map(() => {
            return (
              <div key={`b${getUniqueKey()}`} className="star-svg-wrapper">
                <img src={starHalfSVG} alt="half full rating star" />
              </div>
            );
          }),
          [...Array(numOfEmptyStars)].map(() => {
            return (
              <div key={`c${getUniqueKey()}`} className="star-svg-wrapper">
                <img src={starEmptySVG} alt="empty rating star" />
              </div>
            );
          }),
        ]}
      </div>
      <div className="review_count">({reviewCount})</div>
    </div>
  );
};

export default Rating;
