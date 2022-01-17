import { useContext } from 'react';
import ProductsContext from '../../logic/contexts/productsContext';
import {
  getUniqueKey,
  normalizePrice,
  capitalizeSentence,
} from '../../logic/helperFuncs';

import TextBlock from '../misc/TextBlock';
import Rating from './Rating';

import '../../stylesheets/ProductInfo.css';

/* need to have all products in html, how to achieve this?
    - slider
    - display: none
*/

const ProductInfo = ({ activeProduct, isMobile, isVisible }) => {
  const { products } = useContext(ProductsContext);

  return (
    <div
      className={`product_info-ctn flex-column ${
        !isMobile ? '' : isVisible ? '' : 'inactive' // only perform isVisible check if not on mobile
      }`}
    >
      {products &&
        products.map((p, i) => {
          const visibilityClass = i === activeProduct ? '' : 'inactive';
          return (
            <div
              key={getUniqueKey()}
              className={`product_info-wrapper ${visibilityClass}`}
            >
              <div className="product-price-wrapper">
                <h4>&#36;{normalizePrice(p.price)}</h4>
              </div>
              <TextBlock className="product-desc">
                {capitalizeSentence(p.description)}
              </TextBlock>
              <Rating rating={p.rating.rate} reviewCount={p.rating.count} />
            </div>
          );
        })}
      <button className="flat-btn add_to_cart-btn" type="button">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
