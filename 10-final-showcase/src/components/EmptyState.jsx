function EmptyState({ favoritesOnly, onReset }) {
  return (
    <div className="empty-state">
      <span aria-hidden="true">◎</span>
      <h3>{favoritesOnly ? "Your watchlist is waiting" : "No films found"}</h3>
      <p>
        {favoritesOnly
          ? "Save a few discoveries and they will appear here."
          : "Try a shorter title or another genre."}
      </p>
      <button type="button" onClick={onReset}>
        {favoritesOnly ? "Explore the collection" : "Clear filters"}
      </button>
    </div>
  );
}

export default EmptyState;
