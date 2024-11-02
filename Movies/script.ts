interface Cast {
    actor: string
    character: string
}

interface Oscars {
    award: string
}


interface Movie {
    id: number
    title: string
    year: number
    director: string
    genre: string[]
    plot: string
    cast: Cast[]
    oscars: Oscars[]
    rating: number
}

type MovieSorter = (first: Movie, second: Movie) => number

document.addEventListener("DOMContentLoaded", siteCode)

let movies: Movie[] = []
let idSortAscending = true;
let titleSortAscending = true;
let directorSortAscending = true;
let yearSortAscending = true;

async function siteCode() {
    try {
    const data = await loadData()
    movies = data

    fillGenres(movies)

    displayMovies(movies)

    const titleSort = document.getElementById("sort-title")!
    titleSort.addEventListener("click", sortByTitle)

    const idSort = document.getElementById("sort-id")!;
    idSort.addEventListener("click", sortById);

    const directorSort = document.getElementById("sort-director")!
    directorSort.addEventListener("click", sortByDirector)

    const yearSort = document.getElementById("sort-year")!
    yearSort.addEventListener("click", sortByYear)

    const applyFilterButton = document.getElementById("apply-filter")!;
    applyFilterButton.addEventListener("click", applyFilter)
    } catch (err) {
        console.log(err)
    }
}

const titleSorter: MovieSorter = (first, second) => first.title.localeCompare(second.title);
const idSorter: MovieSorter = (first, second) => first.id - second.id;
const directorSorter: MovieSorter = (first, second) => first.director.localeCompare(second.director);
const yearSorter: MovieSorter = (first, second) => first.year - second.year


const sortById = () => {
    const sortedMovies = movies.slice().sort((first, second) => 
        idSortAscending ? first.id - second.id : second.id - first.id
    );
    displayMovies(sortedMovies);
    idSortAscending = !idSortAscending;

    const idSort = document.getElementById("sort-id")!;
    idSort.innerText = idSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByTitle = () => {
    const sortedMovies = movies.slice().sort((first, second) => 
        titleSortAscending ? first.title.localeCompare(second.title) : second.title.localeCompare(first.title)
    );
    displayMovies(sortedMovies);
    titleSortAscending = !titleSortAscending;

    const titleSort = document.getElementById("sort-title")!;
    titleSort.innerText = titleSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByDirector = () => {
    const sortedMovies = movies.slice().sort((first, second) => 
        directorSortAscending ? first.director.localeCompare(second.director) : second.director.localeCompare(first.director)
    );
    displayMovies(sortedMovies);
    directorSortAscending = !directorSortAscending;

    const directorSort = document.getElementById("sort-director")!;
    directorSort.innerText = directorSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByYear = () => {
    const sortedMovies = movies.slice().sort((first, second) => 
        yearSortAscending ? first.year - second.year : second.year - first.year
    );
    displayMovies(sortedMovies);
    yearSortAscending = !yearSortAscending;

    const yearSort = document.getElementById("sort-year")!;
    yearSort.innerText = yearSortAscending ? "Sort ▲" : "Sort ▼";
}
const fillGenres = (movies: Movie[]) => {
    const filter = document.getElementById("genre-filter") as HTMLSelectElement;
    const genres = Array.from(new Set(movies.flatMap(movie => movie.genre)));

    filter.innerHTML = `<option value="all" selected>All</option>`;

    genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.innerHTML = genre;
        filter.appendChild(option);
    })

    console.log("Genres filled:", Array.from(genres));
}

const applyFilter = () => {
    const titleElement = document.getElementById("title-filter") as HTMLSelectElement;
    const title = titleElement.value.toLowerCase().trim();

    const genreElement = document.getElementById("genre-filter") as HTMLSelectElement;
    const genre = genreElement.value;

    const yearElement = document.getElementById("year-filter") as HTMLSelectElement;
    const year = yearElement.value;

    let filteredMovies = movies;
    if (genre !== "all") {
        filteredMovies = filteredMovies.filter(movie => movie.genre.join().toLowerCase().includes(genre.toLowerCase()));
    }

    if (title !== "") {
        filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(title));
    }

    if (year !== "") {
        filteredMovies = filteredMovies.filter(movie => movie.year.toString() === year);
    }

    displayMovies(filteredMovies)
}

const loadData = async () => {
    const dataUri = "https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/refs/heads/main/midterm-2023-11-07/data/movies.json";
    const response = await fetch(dataUri);

    if (!response.ok) {
        throw new Error("The data is not there");
    }

    const data = await response.json();
    return data;
}

const displayMovies = (movies: Movie[]) => {
    const container = document.getElementById("movie-container")!;
    container.innerHTML = "";
    for (const movie of movies) {
        const movieRow = generateMovieRow(movie);
        container.appendChild(movieRow);
    }
}

const generateMovieRow = (movie: Movie) => {
    const row = document.createElement("div");
    row.classList.add("movie-row");

    // id cell
    const idCell = document.createElement("div");
    idCell.classList.add("movie-data", "movie-id");
    idCell.innerHTML = movie.id.toString();
    row.appendChild(idCell);

    const titleCell = document.createElement("div");
    titleCell.classList.add("movie-data", "movie-title");
    titleCell.innerHTML = movie.title;
    row.appendChild(titleCell);

    const directorCell = document.createElement("div");
    directorCell.classList.add("movie-data", "movie-director");
    directorCell.innerHTML = movie.director
    row.appendChild(directorCell);

    const yearCell = document.createElement("div");
    yearCell.classList.add("movie-data", "movie-year");
    yearCell.innerHTML = movie.year.toString()
    row.appendChild(yearCell);

    const genreCell = document.createElement("div");
    genreCell.classList.add("movie-data", "movie-genre");
    genreCell.innerHTML = movie.genre.join(' / ')
    row.appendChild(genreCell);

    const plotCell = document.createElement("div");
    plotCell.classList.add("movie-data", "movie-plot");
    plotCell.innerHTML = movie.plot
    row.appendChild(plotCell);

    const castCell = document.createElement("div");
    castCell.classList.add("movie-data", "movie-cast");
    const castInfo = movie.cast.map(actorInfo => `${actorInfo.actor} as ${actorInfo.character}`).join(", ");
    castCell.innerHTML = castInfo;
    row.appendChild(castCell)

    const oscarCell = document.createElement("div");
    oscarCell.classList.add("movie-data", "movie-oscars");
    for (const category in movie.oscars) {
        oscarCell.innerHTML += `${category} -  ${movie.oscars[category]}, <br>`;
    }
    oscarCell.innerHTML = oscarCell.innerHTML.slice(0, -1);
    row.appendChild(oscarCell)

    return row;
}
