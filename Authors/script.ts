interface Book {
    name: string;
    year: number;
    type: string;
}

interface Author {
    id: number;
    name: string;
    birth_date: string;
    death_date?: string;
    nationality: string;
    bibliography: Book[];
}

type AuthorSorter = (first: Author, second: Author) => number;

document.addEventListener("DOMContentLoaded", siteCode)

let authors: Author[] = [];
let idSortAscending = true;
let nameSortAscending = true;
let birthDateSortAscending = true;
let ageSortAscending = true;
let nationalitySortAscending = true;
let bibliographySortAscending = true
let yearsActiveSortAscending = true


async function siteCode() {
    try {
    const data = await loadData();
    authors = data;

    fillNationalities(authors);

    displayAuthors(authors);

    const nameSort = document.getElementById("sort-name")!;
    nameSort.addEventListener("click", sortByName);

    const idSort = document.getElementById("sort-id")!;
    idSort.addEventListener("click", sortById);

    const birthDateSort = document.getElementById("sort-birth-date")!;
    birthDateSort.addEventListener("click", sortByBirth);

    const nationalitySort = document.getElementById("sort-nationality")!;
    nationalitySort.addEventListener("click", sortByNationality);

    const bibliographySort = document.getElementById("sort-bibliography")!;
    bibliographySort.addEventListener("click", sortByBibliography);

    const ageSort = document.getElementById("sort-age")!;
    ageSort.addEventListener("click", sortByAge);

    const yearsActiveSort = document.getElementById("sort-years-active")!;
    yearsActiveSort.addEventListener("click", sortByYearsActive);

    const applyFilterButton = document.getElementById("apply-filter")!;
    applyFilterButton.addEventListener("click", applyFilter)

    const modal = document.getElementById("biblio-details")!;
    modal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
   } catch(err) {
    console.log(err)
   }
}

const sortById = () => {
    const sortedAuthors = authors.slice().sort((first, second) => 
        idSortAscending ? first.id - second.id : second.id - first.id
    );
    displayAuthors(sortedAuthors);
    idSortAscending = !idSortAscending;

    const idSort = document.getElementById("sort-id")!;
    idSort.innerText = idSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByName = () => {
    const sortedAuthors = authors.slice().sort((first, second) => 
        nameSortAscending ? first.name.localeCompare(second.name) : second.name.localeCompare(first.name)
    );
    displayAuthors(sortedAuthors);
    nameSortAscending = !nameSortAscending;

    const nameSort = document.getElementById("sort-name")!;
    nameSort.innerText = nameSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByBirth = () => {
    const sortedAuthors = authors.slice().sort((first, second) => 
        birthDateSortAscending ? first.birth_date.localeCompare(second.birth_date) : second.birth_date.localeCompare(first.birth_date)
    );
    displayAuthors(sortedAuthors);
    birthDateSortAscending = !birthDateSortAscending

    const birthSort = document.getElementById("sort-birth")!;
    birthSort.innerText = nameSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByAge = () => {
    const sortedAuthors = authors.slice().sort((first, second) => {
        const firstAge = getAuthorAge(first);
        const secondAge = getAuthorAge(second);
        
        return ageSortAscending ? firstAge - secondAge : secondAge - firstAge;
    });
    
    displayAuthors(sortedAuthors);
    ageSortAscending = !ageSortAscending;

    const ageSort = document.getElementById("sort-age")!;
    ageSort.innerText = ageSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByNationality = () => {
    const sortedAuthors = authors.slice().sort((first, second) => 
        nationalitySortAscending ? first.nationality.localeCompare(second.nationality) : second.nationality.localeCompare(first.nationality)
    );
    displayAuthors(sortedAuthors);
    nationalitySortAscending = !nationalitySortAscending;

    const nationalitySort = document.getElementById("sort-nationality")!;
    nationalitySort.innerText = nationalitySortAscending ? "Sort ▲" : "Sort ▼";
}
const sortByBibliography = () => {
    const sortedAuthors = authors.slice().sort((first, second) => 
        bibliographySortAscending ? first.bibliography.length - second.bibliography.length : second.bibliography.length - first.bibliography.length
    );
    displayAuthors(sortedAuthors);
    bibliographySortAscending = !bibliographySortAscending;

    const bibliographySort = document.getElementById("sort-bibliography")!;
    bibliographySort.innerText = bibliographySortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByYearsActive = () => {
    const sortedAuthors = authors.slice().sort((first, second) => {
        const [firstStart, firstEnd] = getYearsActive(first);
        const [secondStart, secondEnd] = getYearsActive(second);

        // First sort by start year (0 for N/A if no active years), then by end year (also 0 for N/A)
        if (firstStart === 0 && secondStart === 0) return 0; // both have no active years
        if (firstStart === 0) return 1; // first has no active years, comes after second
        if (secondStart === 0) return -1; // second has no active years, comes after first

        if (firstStart !== secondStart) return yearsActiveSortAscending ? firstStart - secondStart : secondStart - firstStart;
        return yearsActiveSortAscending ? firstEnd - secondEnd : secondEnd - firstEnd;
    });
    
    displayAuthors(sortedAuthors);
    yearsActiveSortAscending = !yearsActiveSortAscending;

    const yearsActiveSort = document.getElementById("sort-years-active")!;
    yearsActiveSort.innerText = yearsActiveSortAscending ? "Sort ▲" : "Sort ▼";
};

const fillNationalities = (authors: Author[]) => {
    const filter = document.getElementById("nationality-filter") as HTMLSelectElement;
    
    filter.innerHTML = '<option value="all" selected>All</option>';

    const nationalities = Array.from(new Set(authors.map(author => author.nationality)));

    for (const nationality of nationalities) {
        const option = document.createElement("option");
        option.value = nationality;
        option.textContent = nationality;
        filter.appendChild(option);
    }
}


const applyFilter = () => {
    const nationalityElement = document.getElementById("nationality-filter") as HTMLSelectElement;
    const nationality = nationalityElement.value;

    const aliveElement = document.getElementById("alive-filter") as HTMLSelectElement;
    const alive = aliveElement.value;

    const nameElement = document.getElementById("name-filter") as HTMLInputElement
    const name = nameElement.value.toLowerCase()

    let filteredAuthors = authors;

    if (name) {
        filteredAuthors = filteredAuthors.filter(author =>
            author.name.toLowerCase().includes(name)
        );
    }

    if (nationality !== "all") {
        filteredAuthors = filteredAuthors.filter(author => author.nationality === nationality);
    }
    if (alive !== "all") {
        filteredAuthors = filteredAuthors.filter(author => {
            if (alive === "yes") {
                return author.death_date === undefined;
            }
            return !!author.death_date;
        })
    }

    displayAuthors(filteredAuthors);
}



const loadData = async () => {
    const dataUri = " https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/main/dry-run-mid-term-2024/data/authors.json";
    const response = await fetch(dataUri);

    if (!response.ok) {
        throw new Error("The data is not there");
    }

    const data = await response.json();
    return data;
}

const displayAuthors = (authors: Author[]) => {
    const container = document.getElementById("author-container")!;
    container.innerHTML = "";
    for (const author of authors) {
        const authorRow = generateAuthorRow(author);
        container.appendChild(authorRow);
    }
}

const generateAuthorRow = (author: Author) => {
    const row = document.createElement("div");
    row.classList.add("author-row");

    // id cell
    const idCell = document.createElement("div");
    idCell.classList.add("author-data", "author-id");
    idCell.innerHTML = author.id.toString();
    row.appendChild(idCell);

    const nameCell = document.createElement("div");
    nameCell.classList.add("author-data", "author-name");
    nameCell.innerHTML = author.name;
    row.appendChild(nameCell);

    const bdateCell = document.createElement("div");
    bdateCell.classList.add("author-data", "author-bdate");
    bdateCell.innerHTML = author.birth_date;
    row.appendChild(bdateCell);

    const aliveCell = document.createElement("div");
    aliveCell.classList.add("author-data", "author-alive");
    aliveCell.innerHTML = author.death_date ? "No" : "Yes";
    row.appendChild(aliveCell);

    const ageCell = document.createElement("div");
    ageCell.classList.add("author-data", "author-age");
    ageCell.innerHTML = getAuthorAge(author).toString();
    row.appendChild(ageCell);

    const nationalityCell = document.createElement("div");
    nationalityCell.classList.add("author-data", "author-nationality");
    nationalityCell.innerHTML = author.nationality;
    row.appendChild(nationalityCell);

    const biblioCell = document.createElement("div");
    biblioCell.classList.add("author-data", "author-biblio");
    biblioCell.innerHTML = `The author has ${author.bibliography.length} books`;
    biblioCell.addEventListener("click", () => {
        const modal = document.getElementById("biblio-details")!;
        modal.classList.remove("hidden");

        const modalHeader = document.querySelector("#biblio-details-content h2")! as HTMLHeadingElement;
        modalHeader.innerText = `Selected bibliography for ${author.name}`;

        const bookList = document.getElementById("biblio-details-book-list")! as HTMLUListElement;
        bookList.innerHTML = "";
        for (const book of author.bibliography.toSorted((first, second) => first.year - second.year)) {
            const bookItem = document.createElement("li");
            bookItem.innerText = `${book.name} (${book.year})`;
            bookList.appendChild(bookItem);
        }
    })
    row.appendChild(biblioCell);

    const yearsActiveCell = document.createElement("div");
    yearsActiveCell.classList.add("author-data", "author-years");
    yearsActiveCell.innerHTML = getAgesActive(author);
    row.appendChild(yearsActiveCell);

    return row;
}

const getAuthorAge = (author: Author) => {
    // this implementation is a bit wrong, it will show wrong results sometimes
    const birthYear = new Date(author.birth_date).getFullYear();
    if (author.death_date) {
        const deathYear = new Date(author.death_date).getFullYear();
        return deathYear - birthYear;
    } else {
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
}

const getAgesActive = (author: Author): string => {
    if (author.bibliography.length === 0) {
        return "N/A"; 
    }

    const Ages = author.bibliography.map(book => book.year);
    const startAge = Math.min(...Ages);
    const endAge = Math.max(...Ages);

    return `${startAge} - ${endAge}`;
};

const getYearsActive = (author: Author): [number, number] => {
    if (author.bibliography.length === 0) return [0, 0];

    const years = author.bibliography.map(book => book.year);
    const startYear = Math.min(...years);
    const endYear = Math.max(...years);

    return [startYear, endYear];
}