import { useState, useEffect, useCallback } from 'react';
import { getStuffViaFetch } from '../logic/helperFuncs';
import ProductsContext from '../logic/contexts/productsContext';

import '../stylesheets/App.css';
import PageHeader from './misc/PageHeader';
import ProductInfo from './product-info/ProductInfo';
import ProductSelectWrapper from './product-select/ProductSelectWrapper';
import LoadingScreen from './misc/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [activeProduct, setActiveProduct] = useState(0); //index of active product
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products?limit=5';
    (async function () {
      const listOfProducts = await getStuffViaFetch(url);
      setProducts(listOfProducts);
    })();
  }, []);

  const setFinishLoading = useCallback(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <div className="App flex-column border-box">
        <header>
          <PageHeader
            title={"Howie's Mancil Shop"}
            description={
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, illo. Nemo illum consequuntur architecto repellat quo, eius deserunt reiciendis repellendus.'
            }
          />
        </header>
        <section className="main_content border-box">
          <ProductsContext.Provider value={{ products }}>
            {' '}
            {/* context just in case i want to extend*/}
            <ProductSelectWrapper
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
              setFinishLoading={setFinishLoading}
            />
            <ProductInfo activeProduct={activeProduct} />
          </ProductsContext.Provider>
        </section>
      </div>
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
