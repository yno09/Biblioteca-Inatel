import { GENRES } from "../services/api";

const GenreFilter = ({ activeGenre, onGenreChange }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {GENRES.map((genre) => (
        <button
          key={genre.id}
          type="button"
          onClick={() => onGenreChange(genre.id)}
          className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
            activeGenre === genre.id
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-slate-600 text-slate-300 hover:bg-slate-500"
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
