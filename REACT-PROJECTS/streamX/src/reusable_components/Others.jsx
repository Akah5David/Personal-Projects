import { Link } from "react-router-dom";

export default function Others({ others, section }) {
  const sortedArray = [...others].sort(
    (a, b) => b.vote_average - a.vote_average,
  );

  return (
    <div className="grid grid-flow-row grid-cols-5 grid-rows-4 gap-5 pl-4 pr-8">
      {sortedArray.map((o) => (
        <Link to={`/${section}/${o.id}`} key={o.id}>
          <div className="border-2 rounded-lg overflow-hidden flex flex-col gap-4">
            <img
              src={`https://image.tmdb.org/t/p/original/${o.poster_path}`}
              alt={o.title}
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col h-16 p-3 gap-1">
              <h3 className="text-sm line-clamp-2">{o.title}</h3>
              <span className="text-xs opacity-80">
                {o.vote_average.toFixed(2)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
