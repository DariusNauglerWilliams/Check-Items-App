import './compare.css'

import lighbulb from "../assets/idea.png"
import plus from "../assets/plus.png"
import product1 from "../assets/29973_OIK_PRO_T650g_Na_03-Front.png"
import product2 from "../assets/lactalisfoodservice-ultrafraisyaourt-siggis-skyr-vanille-140g-630x630.webp"


function Compare() {
  return (
    <section className="compare-page">
      <header className="compare-header">
        <h1 className="compare-title">Compare Products</h1>
        <p className="compare-text">Choose two products to compare ingredients,</p>
        <p className="compare-text">nutrition, and health scores side by side.</p>
      </header>

      <section className="compare-picks">
        <button type="button" className="compare-card compare-card-left">
          <img src={plus} alt="" className="compare-card-icon" />
          <h4 className="compare-card-title">Add Product 1</h4>
          <p className="compare-card-subtitle">Search or scan</p>
        </button>

        <div className="compare-vs">
          <h2 className="compare-vs-text">VS</h2>
        </div>

        <button type="button" className="compare-card compare-card-right">
          <img src={plus} alt="" className="compare-card-icon" />
          <h4 className="compare-card-title">Add Product 2</h4>
          <p className="compare-card-subtitle">Search or scan</p>
        </button>
      </section>

      <section className="compare-example">
        <h3 className="compare-example-title">Comparison Example</h3>

        <div className="compare-example-grid">
          <div className="compare-example-card compare-example-card-left">
            <img src={product1} alt="" className="compare-example-image" />
            <h4 className="compare-product-title">Product 1</h4>
            <p className="compare-product-detail">Health Score: 92/100</p>
            <p className="compare-product-detail">Calories: 200kcal</p>
            <p className="compare-product-detail">Sugar: 5g</p>
            <p className="compare-product-detail">Protein: 18g</p>
          </div>

          <div className="compare-example-card compare-example-card-right">
            <img src={product2} alt="" className="compare-example-image" />
            <h4 className="compare-product-title">Product 2</h4>
            <p className="compare-product-detail">Health Score: 45/100</p>
             <p className="compare-product-detail">Calories: 290kcal</p>
            <p className="compare-product-detail">Sugar: 19g</p>
            <p className="compare-product-detail">Protein: 6g</p>
          </div>
        </div>
      </section>

      <section className="compare-tip">
                   <img src={lighbulb} alt="" className="compare-tip-img" />
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
