function EmptyState({ favoritesOnly, onReset }) {
  return (
    <div className="rounded-sm border border-dashed border-white/20 px-6 py-20 text-center">
      <span className="text-5xl text-acid" aria-hidden="true">◎</span>
      <h3 className="mt-5 font-display text-3xl">
        {favoritesOnly ? "Your watchlist is waiting" : "No films found"}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-muted">
        {favoritesOnly
          ? "Save a few discoveries and they will appear here."
          : "Try a shorter title or another genre."}
      </p>
      <button className="mt-7 rounded-sm bg-acid px-5 py-3 font-bold text-ink transition hover:bg-white"
        type="button" onClick={onReset}>
        {favoritesOnly ? "Explore the collection" : "Clear filters"}
      </button>
    </div>
  );
}

export default EmptyState;
