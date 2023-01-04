import { Product } from "../pages/Home";

const HomeMain = ({
  products,
  handleCheck,
}: {
  products: Product[];
  handleCheck: (event: { target: { checked: boolean; value: string } }) => void;
}) => {
  return (
    <main>
      <div>
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <input
                value={product.id}
                type="checkbox"
                onChange={handleCheck}
              />
              <p>{product.sku}</p>
              <p>{product.name}</p>
              <p>{parseFloat(product.price).toFixed(2)} $</p>
              <p>
                {product.attribute}: {product.value}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HomeMain;
