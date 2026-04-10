import ProductsBanner from "../Components/ProductsBanner";
import ProductCard from "../Components/ProductCard";

const PRODUCTS = [
  { id: 1, name: "Apple Watch Series 4", price: "120.00", rating: 4 },
  { id: 2, name: "Apple Watch Series 4", price: "120.00", rating: 4 },
  { id: 3, name: "Apple Watch Series 4", price: "120.00", rating: 4 },
];

function Products() {
  return (
    <main className="main">
      <h1 className="page-title">Products</h1>

      <ProductsBanner />

      <div className="products-grid">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}

export default Products;
