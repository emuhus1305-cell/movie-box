const movies = [
  {
    title: "Ayla: The Daughter of War",
    year: 2017,
    rating: 8.3,
    genre: "Drama",
    image: "images/ayla the daughter of war.jpg",
  },
  {
    title: "Bad Genius",
    year: 2017,
    rating: 7.6,
    genre: "Thriller",
    image: "images/Bad genius.jpg",
  },
  {
    title: "Bajrangi Bhaijaan",
    year: 2015,
    rating: 8.1,
    genre: "Drama",
    image: "images/bajrangi bhaijaan.jpg",
  },
  {
    title: "Benim Dunyam",
    year: 2013,
    rating: 7.6,
    genre: "Drama",
    image: "images/benim dunyam.jpg",
  },
  {
    title: "Forgotten",
    year: 2017,
    rating: 7.4,
    genre: "Thriller",
    image: "images/forgotten.jpg",
  },
  {
    title: "Fractured",
    year: 2019,
    rating: 6.4,
    genre: "Thriller",
    image: "images/fractured.jpg",
  },
  {
    title: "Ghajini",
    year: 2008,
    rating: 7.3,
    genre: "Action",
    image: "images/ghajini.jpg",
  },
  {
    title: "Lee Cronin's The Mummy",
    year: 2026,
    rating: 6.5,
    genre: "Horror",
    image: "images/lee cronins the mummy.jpg",
  },
  {
    title: "Miracle in Cell No.7",
    year: 2019,
    rating: 7.8,
    genre: "Drama",
    image: "images/miracle in cell no.7.jpg",
  },
  {
    title: "Mom",
    year: 2017,
    rating: 7.2,
    genre: "Thriller",
    image: "images/mom.jpg",
  },
  {
    title: "Mrs. Serial Killer",
    year: 2020,
    rating: 4.1,
    genre: "Thriller",
    image: "images/Mrs.serial killer.jpg",
  },
  {
    title: "Mucize 2",
    year: 2019,
    rating: 7.2,
    genre: "Drama",
    image: "images/mucize2.jpg",
  },
  {
    title: "Running Against the Wind",
    year: 2019,
    rating: 7.1,
    genre: "Drama",
    image: "images/running against the wind.jpg",
  },
  {
    title: "The Call",
    year: 2020,
    rating: 7.1,
    genre: "Thriller",
    image: "images/The call.jpg",
  },
  {
    title: "The Diplomat",
    year: 2023,
    rating: 7.9,
    genre: "Drama",
    image: "images/the diplomat.jpg",
  },
  {
    title: "The Furious",
    year: 2024,
    rating: 6.8,
    genre: "Action",
    image: "images/the furious.jpg",
  },
  {
    title: "The Invisible Guest",
    year: 2016,
    rating: 8.0,
    genre: "Thriller",
    image: "images/the invisible guest.jpg",
  },
  {
    title: "The Pursuit of Happyness",
    year: 2006,
    rating: 8.0,
    genre: "Drama",
    image: "images/the pursuit of happyness.jpg",
  },
  {
    title: "The Stoning of Soraya M.",
    year: 2008,
    rating: 8.0,
    genre: "Drama",
    image: "images/the stoning of soraya m..jpg",
  },
];

let currentGenre = "All";
let searchQuery = "";
let isSortedByRating = false;

const movieGrid = document.getElementById("movie-grid");
const searchInput = document.getElementById("search-input");
const genreButtons = document.querySelectorAll(".genre-btn");
const sortBtn = document.getElementById("sort-btn");
const emptyState = document.getElementById("empty-state");
const movieCount = document.getElementById("movie-count");

function getStarRating(rating) {
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = (rating / 2) % 1 >= 0.5;
  let starsHTML = "";

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHTML +=
        '<svg class="w-4 h-4 star-filled" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    } else if (i === fullStars && hasHalfStar) {
      starsHTML +=
        '<svg class="w-4 h-4 star-filled" fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="#fbbf24"/><stop offset="50%" stop-color="#4b5563"/></linearGradient></defs><path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    } else {
      starsHTML +=
        '<svg class="w-4 h-4 star-empty" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }
  }
  return starsHTML;
}

function getGenreColor(genre) {
  const colors = {
    Action: "bg-red-500/20 text-red-300 border-red-500/30",
    Drama: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    Romance: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    Thriller: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    Horror: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Sci-Fi": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    Comedy: "bg-green-500/20 text-green-300 border-green-500/30",
  };
  return colors[genre] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
}

function renderMovies() {
  let filtered = movies.filter((movie) => {
    const genreMatch = currentGenre === "All" || movie.genre === currentGenre;
    const searchMatch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return genreMatch && searchMatch;
  });

  if (isSortedByRating) {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  movieCount.textContent = `${filtered.length} movie${filtered.length !== 1 ? "s" : ""}`;

  if (filtered.length === 0) {
    movieGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  const html = filtered
    .map(
      (movie, index) => `
        <div class="movie-card fade-in bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group" style="animation-delay: ${index * 0.05}s">
            <div class="relative aspect-[2/3] overflow-hidden bg-gray-800">
                <img 
                    src="${movie.image}" 
                    alt="${movie.title}" 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onerror="this.src='https://via.placeholder.com/300x450?text=${encodeURIComponent(movie.title)}'"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
                <div class="absolute top-3 right-3">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-semibold border backdrop-blur-sm ${getGenreColor(movie.genre)}">
                        ${movie.genre}
                    </span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-4">
                    <div class="flex items-center gap-1.5">
                        ${getStarRating(movie.rating)}
                        <span class="ml-1.5 text-sm font-bold text-white">${movie.rating}</span>
                    </div>
                </div>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-bold text-white mb-1 line-clamp-1" title="${movie.title}">${movie.title}</h3>
                <p class="text-sm text-gray-500">${movie.year}</p>
            </div>
        </div>
    `,
    )
    .join("");

  movieGrid.innerHTML = html;
}

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  renderMovies();
});

genreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    genreButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentGenre = btn.dataset.genre;
    renderMovies();
  });
});

sortBtn.addEventListener("click", () => {
  isSortedByRating = !isSortedByRating;
  sortBtn.classList.toggle("active", isSortedByRating);
  renderMovies();
});

renderMovies();
