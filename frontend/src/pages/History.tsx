import "./history.css"
// image imports intentionally omitted; placeholders used instead

import rightArrow from '../assets/right-arrow.png'
import star from "../assets/star.png"
import red from "../assets/round.png"
import "./ProductDetails"



  type Product = {

  name: string
  brand?: string
  image?: string
  healthscore?: number
  healthgrade?: string
  ingredients?: string
  calories?: number
  sugar?: number
  protein?: number
  fat?: number
  salt?: number
  allergens?: string[]
  additives?: string[]

  }

let getData:  Product[] = []

let localsaveGet = localStorage.getItem("scanHistory")

if(localsaveGet){

 getData = JSON.parse(localsaveGet)

}


function History() {
  return (
    <section className="history-page">
      <header className="history-header">
        <div className="history-header-left">
          <div className="history-header-copy">
            <h1 className="history-title">Scan History</h1>
            <p className="history-subtitle">View your previously scanned products</p>
            <p className="history-subtitle">and track your choices.</p>
          </div>
        </div>
      </header>

      <nav className="history-filters">
        <button className="filter-btn">All Scans</button>
        <button className="filter-btn"><img src={star} alt="" className="filter-icon"/>Favorites</button>
        <button className="filter-btn"><img src={red} alt="" className="filter-icon"/>Needs Improvement</button>
      </nav>

      <main className="history-main">
        <div className="history-list">
          {getData.map((product,index) => <div key={index}><p>{product.name} {product.brand}</p> <img src={product.image} alt={product.name}></img></div>)}
        </div>
      </main>

      <footer className="history-footer">
        <button className="view-all-btn">
          
          <span>View All History</span>
          <img src={rightArrow} alt="" className="view-all-icon" />
        </button>
      </footer>
    </section>
  );
}

export default History;
