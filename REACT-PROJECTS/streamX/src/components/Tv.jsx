export default function Tv({ genres_in_tv }) {
  return (
    <ul className="grid grid-flow-row grid-cols-5 grid-rows-4 gap-5 pl-4 pr-8">
      {genres_in_tv.map((tv) => (
        <li key={tv.id}>
          <div className="border-2 rounded-lg overflow-hidden flex flex-col gap-4">
            <img
              src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
              alt={tv.title}
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col h-16 pl-3 gap-2">
              <h3 className="text-base line-clamp-2">{tv.original_name}</h3>
              <span className="text-xs opacity-80">{tv.vote_average.toFixed(2)}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
