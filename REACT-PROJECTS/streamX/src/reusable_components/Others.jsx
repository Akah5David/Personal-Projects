import { useNavigate } from "react-router-dom";

export default function Others({ others, section, genre }) {
  const navigate = useNavigate();
  const sortedArray = [...others].sort(
    (a, b) => b.vote_average - a.vote_average,
  );

  // Use genre for /movie/:genre/:id route, otherwise use section for other routes
  const handleCardClick = (id) => {
    if (genre) {
      // Navigate to /movie/:genre/:id
      navigate(`/movie/${genre}/${id}`);
    } else if (section) {
      // Navigate to /:section/:id for other pages
      navigate(`/${section}/${id}`);
    }
  };

  return (
    <div className="grid grid-auto-flow: row grid-cols-5 gap-5 pl-4 pr-8">
      {sortedArray.map((o) => (
        <button
          onClick={() => handleCardClick(o.id)}
          key={o.id}
          className=" flex flex-col h-full gap-4 border-2 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-full h-full">
            <img
              src={`https://image.tmdb.org/t/p/original/${o.poster_path}`}
              alt={o.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col p-3 justify-between">
            <h3 className="text-sm line-clamp-2">{o.title}</h3>
            <span className="text-xs opacity-80">
              {o.vote_average.toFixed(2)}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}

