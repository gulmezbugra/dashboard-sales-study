function ProductsBanner() {
  return (
    <div className="products-banner">
      <button className="products-banner__arrow products-banner__arrow--left">&#8249;</button>

      <div className="products-banner__content">
        <p className="products-banner__date">September 12-22</p>
        <h2 className="products-banner__title">
          Enjoy free home<br />delivery in this summer
        </h2>
        <p className="products-banner__subtitle">
          Designer Dresses – Pick from trendy Designer Dress.
        </p>
        <button className="products-banner__cta">Get Started</button>
      </div>

      <button className="products-banner__arrow products-banner__arrow--right">&#8250;</button>
    </div>
  );
}

export default ProductsBanner;
