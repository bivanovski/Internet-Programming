interface Album {
    name: string
    formed: number
}

interface Band {
    id: number
    name: string
    genre: string
    formed: number // the formed the band was formed
    location: string // the city and country where the band was formed
    members: string[] // an array of strings, each string is the name of a band member
    albums: Album[] 
}

type BandSorter = (first: Band, second: Band) => number

document.addEventListener("DOMContentLoaded", siteCode)

let bands: Band[] = []

let idSortAscending = true;
let nameSortAscending = true;
let genreSortAscending = true;
let formedSortAscending = true;
let locationSortAscending = true;
let albumsSortAscending = true;
let membersSortAscending = true;

async function siteCode() {
    try {
    const data = await loadData()
    bands = data.metalBands;

    fillGenres(bands);
    fillCountries(bands);
    displayBands(bands);

    const idSort = document.getElementById("sort-id")!;
    idSort.addEventListener("click", sortById);

    const nameSort = document.getElementById("sort-name")!
    nameSort.addEventListener("click", sortByName);

    const genreSort = document.getElementById("sort-genre")!
    genreSort.addEventListener("click", sortByGenre);

    const formedSort = document.getElementById("sort-formed")!
    formedSort.addEventListener("click", sortByFormed);

    const locationSort = document.getElementById("sort-location")!
    locationSort.addEventListener("click", sortByLocation);

    const membersSort = document.getElementById("sort-members")!;
    membersSort.addEventListener("click", sortByMembers);

    const applyFilterButton = document.getElementById("apply-filter")!;
    applyFilterButton.addEventListener("click", applyFilter);

    }catch(err) {
         console.log("Error", err);
    }
    
}

const sortById = () => {
    const sortedBands = bands.slice().sort((first, second) => 
        idSortAscending ? first.id - second.id : second.id - first.id
    );
    displayBands(sortedBands);
    idSortAscending = !idSortAscending;

    const idSort = document.getElementById("sort-id")!;
    idSort.innerText = idSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByName = () => {
    const sortedBands = bands.slice().sort((first, second) => 
        nameSortAscending ? first.name.localeCompare(second.name) : second.name.localeCompare(first.name)
    );
    displayBands(sortedBands);
    nameSortAscending = !nameSortAscending;

    const nameSort = document.getElementById("sort-name")!;
    nameSort.innerText = nameSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByGenre = () => {
    const sortedBands = bands.slice().sort((first, second) => 
        genreSortAscending ? first.genre.localeCompare(second.genre) : second.genre.localeCompare(first.genre)
    );
    displayBands(sortedBands);
    genreSortAscending = !genreSortAscending;

    const genreSort = document.getElementById("sort-genre")!;
    genreSort.innerText = genreSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByFormed = () => {
    const sortedBands = bands.slice().sort((first, second) => 
        formedSortAscending ? first.formed - second.formed : second.formed - first.formed
    );
    displayBands(sortedBands);
    formedSortAscending = !formedSortAscending;

    const formedSort = document.getElementById("sort-formed")!;
    formedSort.innerText = formedSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByLocation = () => {
    const sortedBands = bands.slice().sort((first, second) => 
        locationSortAscending ? first.location.localeCompare(second.location) : second.location.localeCompare(first.location)
    );
    displayBands(sortedBands);
    locationSortAscending = !locationSortAscending;

    const locationSort = document.getElementById("sort-location")!;
    locationSort.innerText = locationSortAscending ? "Sort ▲" : "Sort ▼";
}

const sortByMembers = () => {
    const sortedBands = bands.slice().sort((first, second) => {
        const firstMembersCount = first.members.length;
        const secondMembersCount = second.members.length;

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

    const membersSort = document.getElementById("sort-members")!
    membersSort.innerText = membersSortAscending ? "Sort ▲" : "Sort ▼";
}

const fillGenres = (bands: Band[]) => {
    const filter = document.getElementById("genre-filter")!;

    filter.innerHTML = '<option value="all" selected>All</option>';

    const genres = Array.from(new Set(bands.map(bands => bands.genre)));

    for (const genre of genres) {
        const option = document.createElement("option");
        option.value = genre;
        option.innerHTML = genre;
        filter.appendChild(option);
    }
}

const fillCountries = (bands: Band[]) => {
    const filter = document.getElementById("country-filter")!;

    filter.innerHTML = '<option value="all" selected>All</option>';

    const countries = Array.from(new Set(bands.map(bands => findCountry(bands))));

    for (const country of countries) {
        const option = document.createElement("option");
        option.value = country
        option.innerHTML = country
        filter.appendChild(option);
    }
}

const applyFilter = () => {
    const nameElement = document.getElementById("name-filter") as HTMLInputElement;
    const name = nameElement.value.toLowerCase().trim();

    const genreElement = document.getElementById("genre-filter") as HTMLSelectElement;
    const genre = genreElement.value;

    const countryElement = document.getElementById("country-filter") as HTMLSelectElement;
    const country = countryElement.value;

    let filteredBands = bands

    if (name !== "") {
        filteredBands = filteredBands.filter(band => band.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (genre !== "all") {
        filteredBands = filteredBands.filter(band => band.genre.toLowerCase() === genre.toLowerCase());
    }

    if (country !== "all") {
        filteredBands = filteredBands.filter(band => findCountry(band) === country)
    }

    displayBands(filteredBands)
}

const loadData = async () => {
    const dataUri = "https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/main/midterm-2023-11-06/data/bands.json";
    const response = await fetch(dataUri);

    if (!response.ok) {
        throw new Error("The data is not there");
    }

    const data = await response.json();
    return data;
}

const displayBands = (bands: Band[]) => {
    const container = document.getElementById("band-container")!
    container.innerHTML = ""
    for(const band of bands) {
        const bandRow = generateBandRow(band)
        container.appendChild(bandRow)
    }
}



const generateBandRow = (band: Band) => {
    const row = document.createElement("div")
    row.classList.add("band-row")

    const idCell = document.createElement("div");
    idCell.classList.add("band-data", "band-id");
    idCell.innerHTML = band.id.toString();
    row.appendChild(idCell);

    const nameCell = document.createElement("div");
    nameCell.classList.add("band-data", "band-name");
    nameCell.innerHTML = band.name;
    row.appendChild(nameCell);

    const genreCell = document.createElement("div");
    genreCell.classList.add("band-data", "band-genre");
    genreCell.innerHTML = band.genre
    row.appendChild(genreCell);

    const formedCell = document.createElement("div");
    formedCell.classList.add("band-data", "band-formed");
    formedCell.innerHTML = band.formed.toString()
    row.appendChild(formedCell);

    const locationCell = document.createElement("div");
    locationCell.classList.add("band-data", "band-location");
    locationCell.innerHTML = band.location
    row.appendChild(locationCell);
    
    const membersCell = document.createElement("div")
    membersCell.classList.add("band-data", "band-members")
    membersCell.innerHTML = band.members.join(', ')
    row.appendChild(membersCell)

    const albumsCell = document.createElement("div");
    albumsCell.classList.add("band-data","band-albums");
    const firstalbum = `${band.albums[0].formed} - ${band.albums[0].name}`
    const lastalbum=`${band.albums[band.albums.length-1].formed} - "${band.albums[band.albums.length-1].name}"`;
    albumsCell.innerHTML=`${band.name} has ${band.albums.length} albums. \n\n First album: ${firstalbum} \n Last Album: ${lastalbum}`;
    row.appendChild(albumsCell);

    const countryCell = document.createElement("div");
    countryCell.classList.add("band-data","band-country");
    countryCell.innerHTML=findCountry(band);
    row.appendChild(countryCell);

    return row;

}

const findCountry = (band: Band) => {
    let bandLocation = band.location
    let parts = bandLocation.split(', ')
    let lastPart = parts[parts.length - 1]
    return lastPart
}