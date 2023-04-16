    
    var moviesData = [
      { title: "The Shawshank Redemption", genre: "Drama", rating: 1, releaseYear: 1990 },
      { title: "The Godfather", genre: "Crime", rating: 2, releaseYear: 1991 },
      { title: "Pulp Fiction", genre: "Crime", rating: 3, releaseYear: 1992 },
      { title: "The Dark Knight", genre: "Action", rating: 4, releaseYear: 1993 },
      { title: "Forrest Gump", genre: "Drama", rating: 5, releaseYear: 1994 },
      { title: "Fight Club", genre: "Drama", rating: 6, releaseYear: 1995 },
      { title: "Star Wars: Episode IV - A New Hope", genre: "Sci-Fi", rating: 7, releaseYear: 1996 },
      { title: "The Matrix", genre: "Sci-Fi", rating: 8, releaseYear: 1997 },
      { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Fantasy", rating: 9, releaseYear: 1998 },
      { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 1999 },
      { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2000 },
      { title: "The Shawshank Redemption", genre: "Drama", rating: 9.3, releaseYear: 1994 },
        { title: "The Godfather", genre: "Crime", rating: 9.2, releaseYear: 1972 },
        { title: "Pulp Fiction", genre: "Crime", rating: 8.9, releaseYear: 1994 },
        { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
        { title: "Forrest Gump", genre: "Drama", rating: 8.8, releaseYear: 1994 },
        { title: "Fight Club", genre: "Drama", rating: 8.8, releaseYear: 1999 },
        { title: "Star Wars: Episode IV - A New Hope", genre: "Sci-Fi", rating: 8.6, releaseYear: 1977 },
        { title: "The Matrix", genre: "Sci-Fi", rating: 8.7, releaseYear: 1999 },
        { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Fantasy", rating: 8.8, releaseYear: 2001 },
        { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
      ];
  
    
      function getMovieRecommendations() {
        
       var genreInput = document.getElementById("genre").value;
        var ratingInput = document.getElementById("rating").value;
       var releaseYearInput = document.getElementById("release-year").value;
  
                var filteredMovies = moviesData.filter(movie => {
          return (
            movie.genre.toLowerCase() === genreInput.toLowerCase() &&
            movie.rating >= ratingInput &&
            movie.releaseYear >= releaseYearInput
          );
        });
  
                document.getElementById("movie-list").innerHTML = "";
  
        
        var movieListElement = document.getElementById("movie-list");
        filteredMovies.forEach(movie => {
          var movieCardElement = document.createElement("div");
          movieCardElement.className = "movie-card";
          movieCardElement.textContent = `Title: ${movie.title}\nGenre: ${movie.genre}\nRating: ${movie.rating}\nRelease Year: ${movie.releaseYear}`;
          movieListElement.appendChild(movieCardElement);
        });
      }