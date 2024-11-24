var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener("DOMContentLoaded", siteCode);
var movies = [];
var idSortAscending = true;
var titleSortAscending = true;
var directorSortAscending = true;
var yearSortAscending = true;
var genreSortAscending = true;
var castSortAscending = true;
var oscarsSortAscending = true;
function siteCode() {
    return __awaiter(this, void 0, void 0, function () {
        var data, titleSort, idSort, directorSort, yearSort, castSort, genreSort, oscarsSort, applyFilterButton, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, loadData()];
                case 1:
                    data = _a.sent();
                    movies = data;
                    fillGenres(movies);
                    displayMovies(movies);
                    titleSort = document.getElementById("sort-title");
                    titleSort.addEventListener("click", sortByTitle);
                    idSort = document.getElementById("sort-id");
                    idSort.addEventListener("click", sortById);
                    directorSort = document.getElementById("sort-director");
                    directorSort.addEventListener("click", sortByDirector);
                    yearSort = document.getElementById("sort-year");
                    yearSort.addEventListener("click", sortByYear);
                    castSort = document.getElementById("sort-cast");
                    castSort.addEventListener("click", sortByCast);
                    genreSort = document.getElementById("sort-genre");
                    genreSort.addEventListener("click", sortByGenre);
                    oscarsSort = document.getElementById("sort-oscars");
                    oscarsSort.addEventListener("click", sortByOscars);
                    applyFilterButton = document.getElementById("apply-filter");
                    applyFilterButton.addEventListener("click", applyFilter);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var sortById = function () {
    var sortedMovies = movies.slice().sort(function (first, second) {
        return idSortAscending ? first.id - second.id : second.id - first.id;
    });
    displayMovies(sortedMovies);
    idSortAscending = !idSortAscending;
    var idSort = document.getElementById("sort-id");
    idSort.innerText = idSortAscending ? "Sort ▲" : "Sort ▼";
};
var sortByTitle = function () {
    var sortedMovies = movies.slice().sort(function (first, second) {
        return titleSortAscending ? first.title.localeCompare(second.title) : second.title.localeCompare(first.title);
    });
    displayMovies(sortedMovies);
    titleSortAscending = !titleSortAscending;
    var titleSort = document.getElementById("sort-title");
    titleSort.innerText = titleSortAscending ? "Sort ▲" : "Sort ▼";
};
var sortByDirector = function () {
    var sortedMovies = movies.slice().sort(function (first, second) {
        return directorSortAscending ? first.director.localeCompare(second.director) : second.director.localeCompare(first.director);
    });
    displayMovies(sortedMovies);
    directorSortAscending = !directorSortAscending;
    var directorSort = document.getElementById("sort-director");
    directorSort.innerText = directorSortAscending ? "Sort ▲" : "Sort ▼";
};
var sortByYear = function () {
    var sortedMovies = movies.slice().sort(function (first, second) {
        return yearSortAscending ? first.year - second.year : second.year - first.year;
    });
    displayMovies(sortedMovies);
    yearSortAscending = !yearSortAscending;
    var yearSort = document.getElementById("sort-year");
    yearSort.innerText = yearSortAscending ? "Sort ▲" : "Sort ▼";
};
var sortByGenre = function () {
    var sortedMovies = movies.slice().sort(function (a, b) {
        if (a.genre.length !== b.genre.length)
            return genreSortAscending ? a.genre.length - b.genre.length : b.genre.length - a.genre.length;
        return genreSortAscending ? a.genre.join().localeCompare(b.genre.join()) : b.genre.join().localeCompare(a.genre.join());
    });
    displayMovies(sortedMovies);
    genreSortAscending = !genreSortAscending;
    var genreSort = document.getElementById("sort-genre");
    genreSort.innerText = "Sort ".concat(genreSortAscending ? '▲' : '▼');
};
var sortByCast = function () {
    var sortedMovies = movies.slice().sort(function (a, b) {
        if (a.cast.length !== b.cast.length)
            return castSortAscending ? a.cast.length - b.cast.length : b.cast.length - a.cast.length;
        return castSortAscending ? a.cast.map(function (c) { return c.actor; }).join().localeCompare(b.cast.map(function (c) { return c.actor; }).join()) : b.cast.map(function (c) { return c.actor; }).join().localeCompare(a.cast.map(function (c) { return c.actor; }).join());
    });
    displayMovies(sortedMovies);
    castSortAscending = !castSortAscending;
    var castSort = document.getElementById("sort-cast");
    castSort.innerText = "Sort ".concat(castSortAscending ? '▲' : '▼');
};
var sortByOscars = function () {
    var sortedMovies = movies.slice().sort(function (a, b) {
        // Ensure oscars is an array
        var aOscars = Array.isArray(a.oscars) ? a.oscars : [];
        var bOscars = Array.isArray(b.oscars) ? b.oscars : [];
        // Check if either movie has no Oscars
        var aHasOscars = aOscars.length > 0;
        var bHasOscars = bOscars.length > 0;
        if (aHasOscars && !bHasOscars)
            return oscarsSortAscending ? -1 : 1;
        if (!aHasOscars && bHasOscars)
            return oscarsSortAscending ? 1 : -1;
        // Compare by the number of Oscars if both have or both don't have Oscars
        if (aOscars.length !== bOscars.length) {
            return oscarsSortAscending ? aOscars.length - bOscars.length : bOscars.length - aOscars.length;
        }
        // If the number of Oscars is the same, compare by award names
        var aAwards = aOscars.map(function (o) { return o.award; }).sort().join();
        var bAwards = bOscars.map(function (o) { return o.award; }).sort().join();
        return oscarsSortAscending ? aAwards.localeCompare(bAwards) : bAwards.localeCompare(aAwards);
    });
    displayMovies(sortedMovies);
    oscarsSortAscending = !oscarsSortAscending;
    var oscarsSort = document.getElementById("sort-oscars");
    oscarsSort.innerText = "Sort ".concat(oscarsSortAscending ? '▲' : '▼');
};
var fillGenres = function (movies) {
    var filter = document.getElementById("genre-filter");
    var genres = Array.from(new Set(movies.flatMap(function (movie) { return movie.genre; })));
    filter.innerHTML = "<option value=\"all\" selected>All</option>";
    genres.forEach(function (genre) {
        var option = document.createElement("option");
        option.value = genre;
        option.innerHTML = genre;
        filter.appendChild(option);
    });
    console.log("Genres filled:", Array.from(genres));
};
var applyFilter = function () {
    var titleElement = document.getElementById("title-filter");
    var title = titleElement.value.toLowerCase().trim();
    var genreElement = document.getElementById("genre-filter");
    var genre = genreElement.value;
    var yearElement = document.getElementById("year-filter");
    var year = yearElement.value;
    var filteredMovies = movies;
    if (genre !== "all") {
        filteredMovies = filteredMovies.filter(function (movie) { return movie.genre.join().toLowerCase().includes(genre.toLowerCase()); });
    }
    if (title !== "") {
        filteredMovies = filteredMovies.filter(function (movie) { return movie.title.toLowerCase().includes(title); });
    }
    if (year !== "") {
        filteredMovies = filteredMovies.filter(function (movie) { return movie.year.toString() === year; });
    }
    displayMovies(filteredMovies);
};
var loadData = function () { return __awaiter(_this, void 0, void 0, function () {
    var dataUri, response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataUri = "https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/refs/heads/main/midterm-2023-11-07/data/movies.json";
                return [4 /*yield*/, fetch(dataUri)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("The data is not there");
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var displayMovies = function (movies) {
    var container = document.getElementById("movie-container");
    container.innerHTML = "";
    for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
        var movie = movies_1[_i];
        var movieRow = generateMovieRow(movie);
        container.appendChild(movieRow);
    }
};
var generateMovieRow = function (movie) {
    var row = document.createElement("div");
    row.classList.add("movie-row");
    // id cell
    var idCell = document.createElement("div");
    idCell.classList.add("movie-data", "movie-id");
    idCell.innerHTML = movie.id.toString();
    row.appendChild(idCell);
    var titleCell = document.createElement("div");
    titleCell.classList.add("movie-data", "movie-title");
    titleCell.innerHTML = movie.title;
    row.appendChild(titleCell);
    var directorCell = document.createElement("div");
    directorCell.classList.add("movie-data", "movie-director");
    directorCell.innerHTML = movie.director;
    row.appendChild(directorCell);
    var yearCell = document.createElement("div");
    yearCell.classList.add("movie-data", "movie-year");
    yearCell.innerHTML = movie.year.toString();
    row.appendChild(yearCell);
    var genreCell = document.createElement("div");
    genreCell.classList.add("movie-data", "movie-genre");
    genreCell.innerHTML = movie.genre.join(' / ');
    row.appendChild(genreCell);
    var plotCell = document.createElement("div");
    plotCell.classList.add("movie-data", "movie-plot");
    plotCell.innerHTML = movie.plot;
    row.appendChild(plotCell);
    var castCell = document.createElement("div");
    castCell.classList.add("movie-data", "movie-cast");
    var castInfo = movie.cast.map(function (actorInfo) { return "".concat(actorInfo.actor, " as ").concat(actorInfo.character); }).join(", ");
    castCell.innerHTML = castInfo;
    row.appendChild(castCell);
    var oscarCell = document.createElement("div");
    oscarCell.classList.add("movie-data", "movie-oscars");
    for (var category in movie.oscars) {
        oscarCell.innerHTML += "".concat(category, " -  ").concat(movie.oscars[category], ", <br>");
    }
    oscarCell.innerHTML = oscarCell.innerHTML.slice(0, -1);
    row.appendChild(oscarCell);
    return row;
};
