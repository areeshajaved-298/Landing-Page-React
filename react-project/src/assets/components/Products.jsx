function Products() {
  return (
    <section id="products" className="products">
      <h2>Products</h2>

      <div className="product-list">

        <div className="product-card">
          <img src="/images/Nikon-D3500.jpg" alt="" />
          <h3>Nikon D3500</h3>
          <p>PKR 95,000</p>
        </div>

        <div className="product-card">
          <img src="/images/Canon-EOS-1200D.jpg" alt="" />
          <h3>Canon EOS 1200D</h3>
          <p>Rs 43,900</p>
        </div>

        <div className="product-card">
          <img src="/images/Nikon-D3500.jpg" alt="" />
          <h3>Sony Alpha A6300</h3>
          <p>Rs 168,000</p>
        </div>

      </div>
    </section>
  );
}

export default Products;
