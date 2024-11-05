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
var bands = [];
var idSortAscending = true;
var nameSortAscending = true;
var genreSortAscending = true;
var formedSortAscending = true;
var locationSortAscending = true;
var albumsSortAscending = true;
var membersSortAscending = true;
function siteCode() {
    return __awaiter(this, void 0, void 0, function () {
        var data, idSort, nameSort, genreSort, formedSort, locationSort, membersSort, applyFilterButton, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, loadData()];
                case 1:
                    data = _a.sent();
                    bands = data.metalBands;
                    fillGenres(bands);
                    fillCountries(bands);
                    displayBands(bands);
                    idSort = document.getElementById("sort-id");
                    idSort.addEventListener("click", sortById);
                    nameSort = document.getElementById("sort-name");
                    nameSort.addEventListener("click", sortByName);
                    genreSort = document.getElementById("sort-genre");
                    genreSort.addEventListener("click", sortByGenre);
                    formedSort = document.getElementById("sort-formed");
                    formedSort.addEventListener("click", sortByFormed);
                    locationSort = document.getElementById("sort-location");
                    locationSort.addEventListener("click", sortByLocation);
                    membersSort = document.getElementById("sort-members");
                    membersSort.addEventListener("click", sortByMembers);
                    applyFilterButton = document.getElementById("apply-filter");
                    applyFilterButton.addEventListener("click", applyFilter);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log("Error", err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var sortById = function () {
    var sortedBands = bands.slice().sort(function (first, second) {
        return idSortAscending ? first.id - second.id : second.id - first.id;
    });
    displayBands(sortedBands);
    idSortAscending = !idSortAscending;
    var idSort = document.getElementById("sort-id");
    idSort.innerText = idSortAscending ? "Sort ▲" : "Sort ▼";
};
var sortByName = function () {
    var sortedBands = bands.slice().sort(function (first, second) {
        return nameSortAscending ? first.name.localeCompare(second.name) : second.name.localeCompare(first.name);
    });
    displayBands(sortedBands);
    nameSortAscending = !nameSortAscending;
    var nameSort = document.getElementById("sort-name");
    nameSort.innerText = nameSortAscending ? "Sort ▲" : "Sort ▼";
};
var sortByGenre = function () {
    var sortedBands = bands.slice().sort(function (first, second) {
        return genreSortAscending ? first.genre.localeCompare(second.genre) : second.genre.localeCompare(first.genre);
    });
    displayBands(sortedBands);
    genreSortAscending = !genreSortAscending;
    var genreSort = document.getElementById("sort-genre");
    genreSort.innerText = genreSortAscending ? "Sort ▲" : "Sort ▼";
};
var sortByFormed = function () {
    var sortedBands = bands.slice().sort(function (first, second) {
        return formedSortAscending ? first.formed - second.formed : second.formed - first.formed;
    });
    displayBands(sortedBands);
    formedSortAscending = !formedSortAscending;
    var formedSort = document.getElementById("sort-formed");
    formedSort.innerText = formedSortAscending ? "Sort ▲" : "Sort ▼";
};
var sortByLocation = function () {
    var sortedBands = bands.slice().sort(function (first, second) {
        return locationSortAscending ? first.location.localeCompare(second.location) : second.location.localeCompare(first.location);
    });
    displayBands(sortedBands);
    locationSortAscending = !locationSortAscending;
    var locationSort = document.getElementById("sort-location");
    locationSort.innerText = locationSortAscending ? "Sort ▲" : "Sort ▼";
};
var sortByMembers = function () {
    var sortedBands = bands.slice().sort(function (first, second) {
        var firstMembersCount = first.members.length;
        var secondMembersCount = second.members.length;
        // First sort by the number of members
        if (firstMembersCount !== secondMembersCount) {
            return membersSortAscending ? firstMembersCount - secondMembersCount : secondMembersCount - firstMembersCount;
        }
        // If the number of members is equal, sort by the first member's name
        return membersSortAscending
            ? first.members[0].localeCompare(second.members[0])
            : second.members[0].localeCompare(first.members[0]);
    });
    displayBands(sortedBands);
    membersSortAscending = !membersSortAscending;
    var membersSort = document.getElementById("sort-members");
    membersSort.innerText = membersSortAscending ? "Sort ▲" : "Sort ▼";
};
var fillGenres = function (bands) {
    var filter = document.getElementById("genre-filter");
    filter.innerHTML = '<option value="all" selected>All</option>';
    var genres = Array.from(new Set(bands.map(function (bands) { return bands.genre; })));
    for (var _i = 0, genres_1 = genres; _i < genres_1.length; _i++) {
        var genre = genres_1[_i];
        var option = document.createElement("option");
        option.value = genre;
        option.innerHTML = genre;
        filter.appendChild(option);
    }
};
var fillCountries = function (bands) {
    var filter = document.getElementById("country-filter");
    filter.innerHTML = '<option value="all" selected>All</option>';
    var countries = Array.from(new Set(bands.map(function (bands) { return findCountry(bands); })));
    for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
        var country = countries_1[_i];
        var option = document.createElement("option");
        option.value = country;
        option.innerHTML = country;
        filter.appendChild(option);
    }
};
var applyFilter = function () {
    var nameElement = document.getElementById("name-filter");
    var name = nameElement.value.toLowerCase().trim();
    var genreElement = document.getElementById("genre-filter");
    var genre = genreElement.value;
    var countryElement = document.getElementById("country-filter");
    var country = countryElement.value;
    var filteredBands = bands;
    if (name !== "") {
        filteredBands = filteredBands.filter(function (band) { return band.name.toLowerCase().includes(name.toLowerCase()); });
    }
    if (genre !== "all") {
        filteredBands = filteredBands.filter(function (band) { return band.genre.toLowerCase() === genre.toLowerCase(); });
    }
    if (country !== "all") {
        filteredBands = filteredBands.filter(function (band) { return findCountry(band) === country; });
    }
    displayBands(filteredBands);
};
var loadData = function () { return __awaiter(_this, void 0, void 0, function () {
    var dataUri, response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataUri = "https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/main/midterm-2023-11-06/data/bands.json";
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
var displayBands = function (bands) {
    var container = document.getElementById("band-container");
    container.innerHTML = "";
    for (var _i = 0, bands_1 = bands; _i < bands_1.length; _i++) {
        var band = bands_1[_i];
        var bandRow = generateBandRow(band);
        container.appendChild(bandRow);
    }
};
var generateBandRow = function (band) {
    var row = document.createElement("div");
    row.classList.add("band-row");
    var idCell = document.createElement("div");
    idCell.classList.add("band-data", "band-id");
    idCell.innerHTML = band.id.toString();
    row.appendChild(idCell);
    var nameCell = document.createElement("div");
    nameCell.classList.add("band-data", "band-name");
    nameCell.innerHTML = band.name;
    row.appendChild(nameCell);
    var genreCell = document.createElement("div");
    genreCell.classList.add("band-data", "band-genre");
    genreCell.innerHTML = band.genre;
    row.appendChild(genreCell);
    var formedCell = document.createElement("div");
    formedCell.classList.add("band-data", "band-formed");
    formedCell.innerHTML = band.formed.toString();
    row.appendChild(formedCell);
    var locationCell = document.createElement("div");
    locationCell.classList.add("band-data", "band-location");
    locationCell.innerHTML = band.location;
    row.appendChild(locationCell);
    var membersCell = document.createElement("div");
    membersCell.classList.add("band-data", "band-members");
    membersCell.innerHTML = band.members.join(', ');
    row.appendChild(membersCell);
    var albumsCell = document.createElement("div");
    albumsCell.classList.add("band-data", "band-albums");
    var firstalbum = "".concat(band.albums[0].formed, " - ").concat(band.albums[0].name);
    var lastalbum = "".concat(band.albums[band.albums.length - 1].formed, " - \"").concat(band.albums[band.albums.length - 1].name, "\"");
    albumsCell.innerHTML = "".concat(band.name, " has ").concat(band.albums.length, " albums. \n\n First album: ").concat(firstalbum, " \n Last Album: ").concat(lastalbum);
    row.appendChild(albumsCell);
    var countryCell = document.createElement("div");
    countryCell.classList.add("band-data", "band-country");
    countryCell.innerHTML = findCountry(band);
    row.appendChild(countryCell);
    return row;
};
var findCountry = function (band) {
    var bandLocation = band.location;
    var parts = bandLocation.split(', ');
    var lastPart = parts[parts.length - 1];
    return lastPart;
};
