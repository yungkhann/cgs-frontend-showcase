function App() {
  return (
    <div className="min-h-screen bg-ink text-paper" id="top">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10"
          aria-label="Main navigation"
        >
          <a className="font-display text-2xl font-bold tracking-tight" href="#top">
            Cine<span className="text-acid">Scope</span>
          </a>
          <a
            className="text-sm font-semibold text-muted transition hover:text-acid"
            href="#collection"
          >
            Discover
          </a>
        </nav>
      </header>

      <main>
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_25%,rgba(217,255,87,0.13),transparent_32%)]">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-acid">
              Curated stories. Unforgettable nights.
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
              Find your next<br />
              <em className="font-normal text-acid">favorite film.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              Search a thoughtful collection of cinema and make tonight’s choice
              a good one.
            </p>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24"
          id="collection"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-acid">
            Curated collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl">Worth your time</h2>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <a className="font-display text-2xl font-bold text-paper" href="#top">
          Cine<span className="text-acid">Scope</span>
        </a>
        <p>React · Vite · Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
