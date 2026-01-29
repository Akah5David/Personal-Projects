export default function Movies({ genres_in_movie }) {
  console.log("genres_in_movie", genres_in_movie);
  return (
    <ul className="grid  grid-cols-5 gap-5 pl-4 pr-8">
      {genres_in_movie.map((movie) => (
        <li key={movie.id} className = " flex flex-col h-full gap-4 border-2 rounded-lg overflow-hidden">
          <div className="h-full w-full">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col p-4 justify-between">
            <h3 className="text-sm line-clamp-2">{movie.title}</h3>
            <span className="text-xs opacity-80">{movie.vote_average.toFixed(2)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
