import { useState, useEffect, useContext } from 'react';
import ProductsContext from '../../logic/contexts/productsContext';
import { getUniqueKey } from '../../logic/helperFuncs';

import ProductSelect from './ProductSelect';

import '../../stylesheets/ProductSelect.css';

const ProductSelectWrapper = ({
  activeProduct,
  setActiveProduct,
  setFinishLoading,
}) => {
  const { products } = useContext(ProductsContext);
  const [imagesLoaded, setImagesLoaded] = useState([]);

  useEffect(() => {
    // wait for all images to finish loading
    if (!products) return;
    if (products.length === imagesLoaded.length) setFinishLoading();
  }, [products, imagesLoaded, setFinishLoading]);

  return (
    <div className="product-select-wrapper">
      <div className="scroller flex-column">
        <div className="scroller-content flex-column">
          {products &&
            products.map((p, i) => {
              const isActive = i === activeProduct;
              return (
                <ProductSelect
                  key={getUniqueKey()}
                  product={p}
                  isActive={isActive}
                  setActiveProduct={() => setActiveProduct(i)}
                  setFinishLoading={() => {
                    if (imagesLoaded.includes(i)) return;
                    setImagesLoaded((prev) => [...prev, i]);
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductSelectWrapper;
