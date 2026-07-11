import './compare.css'



function Compare() {
  return (
    <section className="compare-page">
      <header className="compare-header">
        <h1 className="compare-title">Compare Products</h1>
        <p className="compare-text">Choose two products to compare ingredients,</p>
        <p className="compare-text">nutrition, and health scores side by side.</p>
      </header>

      <section className="compare-picks">
        <div className="compare-card compare-card-left">
          <img src="" alt="" className="compare-card-icon" />
          <h4 className="compare-card-title">Add Product 1</h4>
          <p className="compare-card-subtitle">Search or scan</p>
        </div>

        <div className="compare-vs">
          <h2 className="compare-vs-text">VS</h2>
        </div>

        <div className="compare-card compare-card-right">
          <img src="" alt="" className="compare-card-icon" />
          <h4 className="compare-card-title">Add Product 2</h4>
          <p className="compare-card-subtitle">Search or scan</p>
        </div>
      </section>

      <section className="compare-example">
        <h3 className="compare-example-title">Comparison Example</h3>

        <div className="compare-example-grid">
          <div className="compare-example-card compare-example-card-left">
            <img src="" alt="" className="compare-example-image" />
            <h4 className="compare-product-title">Product 1</h4>
            <p className="compare-product-detail">Health Score: 92/100</p>
            <p className="compare-product-detail">Sugar: 5g</p>
            <p className="compare-product-detail">Protein: 18g</p>
          </div>

          <div className="compare-example-card compare-example-card-right">
            <img src="" alt="" className="compare-example-image" />
            <h4 className="compare-product-title">Product 2</h4>
            <p className="compare-product-detail">Health Score: 45/100</p>
            <p className="compare-product-detail">Sugar: 19g</p>
            <p className="compare-product-detail">Protein: 6g</p>
          </div>
        </div>
      </section>

      <section className="compare-tip">
        <p className="compare-tip-text">
          Tip: Compare ingredients, sugar, and additives to make healthier choices.
        </p>
      </section>

      <section className="compare-action">
        <button className="compare-button">Start Comparing</button>
      </section>
    </section>
  );
}

export default Compare;
