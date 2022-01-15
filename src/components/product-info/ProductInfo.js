import { useContext } from 'react';
import ProductsContext from '../../logic/contexts/productsContext';
import TextBlock from '../misc/TextBlock';
import Rating from './Rating';

/* need to have all products in html
    - slider
    - display: none
    - 
*/

const ProductInfo = ({}) => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="product_info-ctn">
      {products &&
        products.map((p) => {
          return (
            <div className="product_info-wrapper">
              <div>{p.price}</div>
              <TextBlock>{p.description}</TextBlock>
              <Rating rating={p.rating.rate} reviewCount={p.rating.count} />
              <div>{JSON.stringify(p.rating)}</div>
            </div>
          );
        })}
      <button className="flat-btn" type="button">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
