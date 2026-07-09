import "./history.css"
// image imports intentionally omitted; placeholders used instead

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
        <button className="filter-btn active">All Scans</button>
        <button className="filter-btn"><img src="" alt="" className="filter-icon"/>Favorites</button>
        <button className="filter-btn"><img src="" alt="" className="filter-icon"/>Needs Improvement</button>
      </nav>

      <main className="history-main">
        <div className="history-list">
          {/* product list will go here - not setting up products yet */}
        </div>
      </main>

      <footer className="history-footer">
        <button className="view-all-btn">
          <img src="" alt="" className="view-all-icon" />
          View All History
        </button>
      </footer>
    </section>
  );
}

export default History;
