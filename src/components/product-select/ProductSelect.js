import ProductSelectButton from './ProductSelectButton';

const ProductSelect = ({
  product,
  isActive,
  isMobile,
  setActiveProduct,
  setFinishLoading,
}) => {
  return (
    <div className="product-wrapper">
      <div className="product-image-wrapper" onClick={setActiveProduct}>
        <img
          src={product.image}
          alt={product.title}
          width={isMobile ? 50 : 100}
          height="auto"
          className="product-image"
          onLoad={setFinishLoading}
        />
      </div>
      <div className="product-title-wrapper" onClick={setActiveProduct}>
        <h3 className="product-title">{product.title}</h3>
      </div>
      <ProductSelectButton
        isActive={isActive}
        isMobile={isMobile}
        onClick={setActiveProduct}
      />
    </div>
  );
};
/* components i need 
  - picture
  - name
  - chevron icon button
*/
export default ProductSelect;
