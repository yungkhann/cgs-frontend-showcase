function App() {
  return (
    <div className="app" id="top">
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand" href="#top">Cine<span>Scope</span></a>
          <a href="#collection">Discover</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow">Curated stories. Unforgettable nights.</p>
            <h1>Find your next<br /><em>favorite film.</em></h1>
            <p className="hero__copy">
              Search a thoughtful collection of cinema and make tonight’s choice
              a good one.
            </p>
          </div>
        </section>

        <section className="collection" id="collection">
          <p className="eyebrow">Curated collection</p>
          <h2>Worth your time</h2>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top">Cine<span>Scope</span></a>
        <p>React · Vite · Plain CSS</p>
      </footer>
    </div>
  );
}

export default App;
