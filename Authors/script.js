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
var authors = [];
function siteCode() {
    return __awaiter(this, void 0, void 0, function () {
        var data, nameSort, idSort, birthDateSort, nationalitySort, bibliographySort, ageSort, applyFilterButton, modal_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, loadData()];
                case 1:
                    data = _a.sent();
                    authors = data;
                    fillNationalities(authors);
                    displayAuthors(authors);
                    nameSort = document.getElementById("sort-name");
                    nameSort.addEventListener("click", sortByName);
                    idSort = document.getElementById("sort-id");
                    idSort.addEventListener("click", sortById);
                    birthDateSort = document.getElementById("sort-birth-date");
                    birthDateSort.addEventListener("click", sortByBirthDate);
                    nationalitySort = document.getElementById("sort-nationality");
                    nationalitySort.addEventListener("click", sortByNationality);
                    bibliographySort = document.getElementById("sort-bibliography");
                    bibliographySort.addEventListener("click", sortByBibliography);
                    ageSort = document.getElementById("sort-age");
                    ageSort.addEventListener("click", sortByAge);
                    applyFilterButton = document.getElementById("apply-filter");
                    applyFilterButton.addEventListener("click", applyFilter);
                    modal_1 = document.getElementById("biblio-details");
                    modal_1.addEventListener("click", function () {
                        modal_1.classList.add("hidden");
                    });
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
var nameSorter = function (first, second) { return first.name.localeCompare(second.name); };
var idSorter = function (first, second) { return first.id - second.id; };
var birthDateSorter = function (first, second) { return new Date(first.birth_date).getTime() - new Date(second.birth_date).getTime(); };
var nationalitySorter = function (first, second) { return first.nationality.localeCompare(second.nationality); };
var bibliographySorter = function (first, second) { return first.bibliography.length - second.bibliography.length; };
var ageSorter = function (first, second) { return getAuthorAge(first) - getAuthorAge(second); };
var sortByName = function () {
    var sortedAuthors = authors.toSorted(nameSorter);
    displayAuthors(sortedAuthors);
};
var sortById = function () {
    var sortedAuthors = authors.toSorted(idSorter);
    displayAuthors(sortedAuthors);
};
var sortByBirthDate = function () {
    var sortedAuthors = authors.toSorted(birthDateSorter);
    displayAuthors(sortedAuthors);
};
var sortByNationality = function () {
    var sortedAuthors = authors.toSorted(nationalitySorter);
    displayAuthors(sortedAuthors);
};
var sortByBibliography = function () {
    var sortedAuthors = authors.toSorted(bibliographySorter);
    displayAuthors(sortedAuthors);
};
var sortByAge = function () {
    var sortedAuthors = authors.toSorted(ageSorter);
    displayAuthors(sortedAuthors);
};
var fillNationalities = function (authors) {
    var filter = document.getElementById("nationality-filter");
    filter.innerHTML = '<option value="all" selected>All</option>';
    var nationalities = Array.from(new Set(authors.map(function (author) { return author.nationality; })));
    for (var _i = 0, nationalities_1 = nationalities; _i < nationalities_1.length; _i++) {
        var nationality = nationalities_1[_i];
        var option = document.createElement("option");
        option.value = nationality;
        option.textContent = nationality;
        filter.appendChild(option);
    }
};
var applyFilter = function () {
    var nationalityElement = document.getElementById("nationality-filter");
    var nationality = nationalityElement.value;
    var aliveElement = document.getElementById("alive-filter");
    var alive = aliveElement.value;
    var nameElement = document.getElementById("name-filter");
    var name = nameElement.value.toLowerCase();
    var filteredAuthors = authors;
    if (name) {
        filteredAuthors = filteredAuthors.filter(function (author) {
            return author.name.toLowerCase().includes(name);
        });
    }
    if (nationality !== "all") {
        filteredAuthors = filteredAuthors.filter(function (author) { return author.nationality === nationality; });
    }
    if (alive !== "all") {
        filteredAuthors = filteredAuthors.filter(function (author) {
            if (alive === "yes") {
                return author.death_date === undefined;
            }
            return !!author.death_date;
        });
    }
    displayAuthors(filteredAuthors);
};
var loadData = function () { return __awaiter(_this, void 0, void 0, function () {
    var dataUri, response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataUri = "https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/main/dry-run-mid-term/data/authors.json";
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
var displayAuthors = function (authors) {
    var container = document.getElementById("author-container");
    container.innerHTML = "";
    for (var _i = 0, authors_1 = authors; _i < authors_1.length; _i++) {
        var author = authors_1[_i];
        var authorRow = generateAuthorRow(author);
        container.appendChild(authorRow);
    }
};
var generateAuthorRow = function (author) {
    var row = document.createElement("div");
    row.classList.add("author-row");
    // id cell
    var idCell = document.createElement("div");
    idCell.classList.add("author-data", "author-id");
    idCell.innerHTML = author.id.toString();
    row.appendChild(idCell);
    var nameCell = document.createElement("div");
    nameCell.classList.add("author-data", "author-name");
    nameCell.innerHTML = author.name;
    row.appendChild(nameCell);
    var bdateCell = document.createElement("div");
    bdateCell.classList.add("author-data", "author-bdate");
    bdateCell.innerHTML = author.birth_date;
    row.appendChild(bdateCell);
    var aliveCell = document.createElement("div");
    aliveCell.classList.add("author-data", "author-alive");
    aliveCell.innerHTML = author.death_date ? "No" : "Yes";
    row.appendChild(aliveCell);
    var ageCell = document.createElement("div");
    ageCell.classList.add("author-data", "author-age");
    ageCell.innerHTML = getAuthorAge(author).toString();
    row.appendChild(ageCell);
    var nationalityCell = document.createElement("div");
    nationalityCell.classList.add("author-data", "author-nationality");
    nationalityCell.innerHTML = author.nationality;
    row.appendChild(nationalityCell);
    var biblioCell = document.createElement("div");
    biblioCell.classList.add("author-data", "author-biblio");
    biblioCell.innerHTML = "The author has ".concat(author.bibliography.length, " books");
    biblioCell.addEventListener("click", function () {
        var modal = document.getElementById("biblio-details");
        modal.classList.remove("hidden");
        var modalHeader = document.querySelector("#biblio-details-content h2");
        modalHeader.innerText = "Selected bibliography for ".concat(author.name);
        var bookList = document.getElementById("biblio-details-book-list");
        bookList.innerHTML = "";
        for (var _i = 0, _a = author.bibliography.toSorted(function (first, second) { return first.year - second.year; }); _i < _a.length; _i++) {
            var book = _a[_i];
            var bookItem = document.createElement("li");
            bookItem.innerText = "".concat(book.name, " (").concat(book.year, ")");
            bookList.appendChild(bookItem);
        }
    });
    row.appendChild(biblioCell);
    var yearsActiveCell = document.createElement("div");
    yearsActiveCell.classList.add("author-data", "author-years");
    yearsActiveCell.innerHTML = "----";
    row.appendChild(yearsActiveCell);
    return row;
};
var getAuthorAge = function (author) {
    // this implementation is a bit wrong, it will show wrong results sometimes
    var birthYear = new Date(author.birth_date).getFullYear();
    if (author.death_date) {
        var deathYear = new Date(author.death_date).getFullYear();
        return deathYear - birthYear;
    }
    else {
        var currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
};
