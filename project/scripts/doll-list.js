const dolls = [
    {
        dollName: "Kaya",
        seriesYear: 1764,
        hairColor: "Black",
        eyeColor: "Brown",
        yearReleased: 2002,
    },
    {
        dollName: "Felicity Merriman",
        seriesYear: 1774,
        hairColor: "Red",
        eyeColor: "Green",
        yearReleased: 1991,
    },
    {
        dollName: "Elizabeth Cole",
        seriesYear: 1774,
        hairColor: "Blonde",
        eyeColor: "Blue",
        yearReleased: 2005,
    },
    {
        dollName: "Caroline Abbott",
        seriesYear: 1812,
        hairColor: "Blonde",
        eyeColor: "Blue",
        yearReleased: 2012,
    },
    {
        dollName: "Josefina Montoya",
        seriesYear: 1824,
        hairColor: "Brown",
        eyeColor: "Brown",
        yearReleased: 1997,
    },
    {
        dollName: "Marie-Grace Gardner",
        seriesYear: 1853,
        hairColor: "Brown",
        eyeColor: "Blue",
        yearReleased: 2011,
    },
    {
        dollName: "Cécile Rey",
        seriesYear: 1853,
        hairColor: "Brown",
        eyeColor: "Hazel",
        yearReleased: 2011,
    },
    {
        dollName: "Kirsten Larson",
        seriesYear: 1854,
        hairColor: "Blonde",
        eyeColor: "Blue",
        yearReleased: 1986,
    },
    {
        dollName: "Addy Walker",
        seriesYear: 1864,
        hairColor: "Brown",
        eyeColor: "Brown",
        yearReleased: 1993,
    },
    {
        dollName: "Samantha Parkington",
        seriesYear: 1904,
        hairColor: "Brown",
        eyeColor: "Brown",
        yearReleased: 1986,
    },
    {
        dollName: "Nellie O'Malley",
        seriesYear: 1904,
        hairColor: "Red",
        eyeColor: "Blue",
        yearReleased: 2004,
    },
    {
        dollName: "Rebecca Rubin",
        seriesYear: 1914,
        hairColor: "Brown",
        eyeColor: "Hazel",
        yearReleased: 2009,
    },
    {
        dollName: "Claudie Wells",
        seriesYear: 1922,
        hairColor: "Brown",
        eyeColor: "Brown",
        yearReleased: 2022,
    },
    {
        dollName: "Kit Kittredge",
        seriesYear: 1934,
        hairColor: "Blonde",
        eyeColor: "Blue",
        yearReleased: 2000,
    },
    {
        dollName: "Ruthie Smithens",
        seriesYear: 1934,
        hairColor: "Brown",
        eyeColor: "Gray",
        yearReleased: 2008,
    },
    {
        dollName: "Nanea Mitchell",
        seriesYear: 1941,
        hairColor: "Brown",
        eyeColor: "Hazel",
        yearReleased: 2017,
    },
    {
        dollName: "Molly McIntire",
        seriesYear: 1944,
        hairColor: "Brown",
        eyeColor: "Gray",
        yearReleased: 1986,
    },
    {
        dollName: "Emily Bennett",
        seriesYear: 1944,
        hairColor: "Red",
        eyeColor: "Blue",
        yearReleased: 2006,
    },
    {
        dollName: "Maryellen Larkin",
        seriesYear: 1954,
        hairColor: "Blonde",
        eyeColor: "Hazel",
        yearReleased: 2015,
    },
    {
        dollName: "Melody Ellison",
        seriesYear: 1964,
        hairColor: "Brown",
        eyeColor: "Brown",
        yearReleased: 2016,
    },
    {
        dollName: "Julie Albright",
        seriesYear: 1974,
        hairColor: "Blonde",
        eyeColor: "Brown",
        yearReleased: 2007,
    },
    {
        dollName: "Ivy Ling",
        seriesYear: 1974,
        hairColor: "Black",
        eyeColor: "Brown",
        yearReleased: 2007,
    },
    {
        dollName: "Courtney Moore",
        seriesYear: 1986,
        hairColor: "Blonde",
        eyeColor: "Blue",
        yearReleased: 2020,
    },
    {
        dollName: "Isabel Hoffman",
        seriesYear: 1999,
        hairColor: "Blonde",
        eyeColor: "Green",
        yearReleased: 2023,
    },
    {
        dollName: "Nicki Hoffman",
        seriesYear: 1999,
        hairColor: "Brown",
        eyeColor: "Blue",
        yearReleased: 2023,
    }
]

createDollCard(dolls);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const pleasantLink = document.querySelector("#pleasant");

homeLink.addEventListener("click", () => {
    createDollCard(dolls);
    document.getElementById("title").textContent = "All dolls";
    localStorage.setItem("dollFilter", "allDolls");
});

oldLink.addEventListener("click", () => {
    createDollCard(dolls.filter(doll => doll.seriesYear < 1900));
    document.getElementById("title").textContent = "Before 1900";
    localStorage.setItem("dollFilter", "before1900");
});

newLink.addEventListener("click", () => {
    createDollCard(dolls.filter(doll => doll.seriesYear >= 1900));
    document.getElementById("title").textContent = "After 1900";
    localStorage.setItem("dollFilter", "after1900");
});

pleasantLink.addEventListener("click", () => {
    createDollCard(dolls.filter(doll => doll.yearReleased < 2000));
    document.getElementById("title").textContent = "Pleasant Company";
    localStorage.setItem("dollFilter", "pleasant");
});

function createDollCard(filteredDolls) {
    document.querySelector(".dollgallery").innerHTML = "";
    filteredDolls.forEach(doll => {
        let card = document.createElement("section");
        let dollName = document.createElement("h3");
        let seriesYear = document.createElement("p");
        let hairColor = document.createElement("p");
        let eyeColor = document.createElement("p");
        let yearReleased = document.createElement("p");

        dollName.textContent = doll.dollName;
        seriesYear.innerHTML = `<span class="label">Series year:</span> ${doll.seriesYear}`;
        hairColor.innerHTML = `<span class="label">Hair color:</span> ${doll.hairColor}`;
        eyeColor.innerHTML = `<span class="label">Eye color:</span> ${doll.eyeColor}`;
        yearReleased.innerHTML = `<span class="label">Year released:</span> ${doll.yearReleased}`;

        card.appendChild(dollName);
        card.appendChild(seriesYear);
        card.appendChild(hairColor);
        card.appendChild(eyeColor);
        card.appendChild(yearReleased);

        document.querySelector(".dollgallery").appendChild(card);
    });
}

var storedFilter = localStorage.getItem("dollFilter") ? localStorage.getItem("dollFilter") : "";
if (storedFilter == "allDolls") {
    createDollCard(dolls);
    document.getElementById("title").textContent = "All dolls";
} else if (storedFilter == "before1900") {
    createDollCard(dolls.filter(doll => doll.seriesYear < 1900));
    document.getElementById("title").textContent = "Before 1900";
} else if (storedFilter == "after1900") {
    createDollCard(dolls.filter(doll => doll.seriesYear >= 1900));
    document.getElementById("title").textContent = "After 1900";
} else if (storedFilter == "pleasant") {
    createDollCard(dolls.filter(doll => doll.yearReleased < 2000));
    document.getElementById("title").textContent = "Pleasant Company";
}