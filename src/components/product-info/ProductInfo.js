import { useContext } from 'react';
import ProductsContext from '../../logic/contexts/productsContext';
import { getUniqueKey } from '../../logic/helperFuncs';

import TextBlock from '../misc/TextBlock';
import Rating from './Rating';

import '../../stylesheets/ProductInfo.css';

/* need to have all products in html
    - slider
    - display: none
    - 
*/

const ProductInfo = ({ activeProduct }) => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="product_info-ctn flex-column">
      {products &&
        products.map((p, i) => {
          const visibilityClass = i === activeProduct ? '' : 'inactive';
          return (
            <div
              key={getUniqueKey()}
              className={`product_info-wrapper ${visibilityClass}`}
            >
              <div className="product-price-wrapper">
                <h4>&#36;{p.price}</h4>
              </div>
              <TextBlock className="product-desc">{p.description}</TextBlock>
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
