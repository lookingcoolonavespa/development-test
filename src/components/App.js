import { useState, useEffect } from 'react';
import { getStuffFromApi } from '../logic/helperFuncs';
import ProductsContext from '../logic/contexts/productsContext';

import '../stylesheets/App.css';
import PageHeader from './misc/PageHeader';
import ProductInfo from './product-info/ProductInfo';
import ProductSelect from './product-select/ProductSelect';

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products?limit=5';
    (async function () {
      const listOfProducts = await getStuffFromApi(url);
      setProducts(listOfProducts);
    })();
  }, []);

  return (
    <div className="App">
      <PageHeader
        title={"Howie's Mancil Shop"}
        description={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, illo. Nemo illum consequuntur architecto repellat quo, eius deserunt reiciendis repellendus.'
        }
      />
      <ProductsContext.Provider value={{ products }}>
        {products &&
          products.map((p) => {
            return <ProductSelect product={p} />;
          })}
        <ProductInfo />
      </ProductsContext.Provider>
    </div>
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
