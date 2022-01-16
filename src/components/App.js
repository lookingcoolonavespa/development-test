import { useState, useEffect, useCallback } from 'react';
import { getStuffViaFetch } from '../logic/helperFuncs';
import ProductsContext from '../logic/contexts/productsContext';
import useMobileCheck from '../logic/hooks/useMobileCheck';

import '../stylesheets/App.css';
import PageHeader from './misc/PageHeader';
import ProductInfo from './product-info/ProductInfo';
import ProductSelectWrapper from './product-select/ProductSelectWrapper';
import LoadingScreen from './misc/LoadingScreen';

function App() {
  const { isMobile } = useMobileCheck();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [activeProduct, setActiveProduct] = useState(0); //index of active product

  const [showProductInfo, setShowProductInfo] = useState(false); // for mobile view only

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products?limit=5';
    (async function () {
      const listOfProducts = await getStuffViaFetch(url);
      setProducts(listOfProducts);
    })();
  }, []);

  const setFinishLoading = useCallback(() => {
    // function is passed as props
    setLoading(false);
  }, [setLoading]);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      {products && (
        <div className="App flex-column border-box">
          <header>
            <PageHeader
              title={"Kermit's General Store"}
              description={
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, illo. Nemo illum consequuntur architecto repellat quo, eius deserunt reiciendis repellendus.'
              }
            />
          </header>
          <main
            className={`main_content border-box ${
              isMobile.current ? 'mobile' : ''
            }`}
          >
            <ProductsContext.Provider value={{ products }}>
              <ProductSelectWrapper
                activeProduct={activeProduct}
                setActiveProduct={(index) => {
                  setActiveProduct(index);
                  setShowProductInfo(true);
                }}
                setFinishLoading={setFinishLoading}
                isMobile={isMobile.current}
                isVisible={!showProductInfo}
              />
              <ProductInfo
                activeProduct={activeProduct}
                isMobile={isMobile.current}
                isVisible={showProductInfo}
              />
            </ProductsContext.Provider>
            {isMobile.current && showProductInfo && (
              <button
                className="flat-btn"
                type="button"
                onClick={() => setShowProductInfo(false)}
              >
                Go back to products
              </button>
            )}
          </main>
        </div>
      )}
    </>
  );
}

export default App;

/* Components I need */
// header
//  page desc
// content
//  product select
//    product image
//    product name
//    chevron icon button
//  product info
//    price
//    product desc
//    reviews
//    add to cart btn

/* how will this look like on mobile? 
two row, one column? 
maybe just show product select and have product info slide in on click
*/
