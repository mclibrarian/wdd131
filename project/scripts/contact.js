const lines = [
    {
        id: "cc",
        name: "Contemporary Characters"
    },
    {
        id: "goty",
        name: "Girl of the Year"
    },
    {
        id: "goml",
        name: "Girls of Many Lands"
    },
    {
        id: "hc",
        name: "Historicals"
    },
    {
        id: "ww",
        name: "Welliewishers"
    },
    {
        id: "wbu",
        name: "World By Us"
    },
    {
        id: "other",
        name: "Other"
    }
];

if (document.getElementById("favoritedoll")) {
    document.getElementById("favoritedoll")
    lines.forEach(line => {
        let newoption = document.createElement("option")

        newoption.setAttribute("id", line.id)
        newoption.setAttribute("value", line.name)

        newoption.innerHTML = line.name

        favoritedoll.appendChild(newoption)
    })
}