function Main() {
  return (
    <>
    <section>

     <h1>Find Healthier Products</h1> 

     <p>Scan barcodes, search products, and compare</p>
     <p>ingredients to make better long term choices.</p>

  <div>
          <input
            type="text"
            placeholder="Search for a product..."
          />

          <button>
            Search
          </button>

        </div>
     <p>or</p>

<button>Scan Barcode</button>
     
    
</section>

<section>

<h3>Quick Actions</h3>

  <div>
    <h4>Scan Product</h4>
    <p>Scan a barcode to analyze a product.</p>
  </div>

  <div>
    <h4>History</h4>
    <p>View previously scanned items.</p>
  </div>

  <div>
    <h4>Compare</h4>
    <p>Compare two products side by side.</p>
  </div>

</section>

<section>

<h3>Recent Scans</h3>

<p>No products scanned yet.</p>

</section>

<section>

  <h3>How It Works</h3>

  <div>
    <p>1. Search or scan a product.</p>
    <p>2. Review ingredients and nutrition.</p>
    <p>3. Compare healthier alternatives.</p>
  </div>


</section>



</>
  );
}

export default Main;
