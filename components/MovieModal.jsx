import React from 'react';

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-zinc-900 text-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
        <button
          className="absolute top-2 right-3 text-white text-2xl font-bold hover:text-red-400"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded mb-4"
        />
        <p className="text-sm mb-4">{movie.overview || 'No description available.'}</p>
        <div className="text-xs text-gray-400 space-y-1">
          <p>📅 Release Date: {movie.release_date}</p>
          <p>⭐ Rating: {movie.vote_average}</p>
          <p>🈳 Language: {movie.original_language?.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
