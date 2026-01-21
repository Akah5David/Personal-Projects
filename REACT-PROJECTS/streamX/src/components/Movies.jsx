export default function Movies({ genres_in_movie }) {
  return (
    <ul className="grid grid-flow-row grid-cols-5 grid-rows-4 gap-5 pl-4 pr-8">
      {genres_in_movie.map((movie) => (
        <li key={movie.id} >
          <div className="border-2 rounded-lg overflow-hidden flex flex-col gap-4">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col h-16 p-3 gap-1">
              <h3 className="text-sm line-clamp-2">{movie.title}</h3>
              <span className="text-xs opacity-80">{movie.vote_average}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
