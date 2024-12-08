const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

button = document.getElementById("submitbutton")

var currentValue = localStorage.getItem("myClicks") ? parseInt(localStorage.getItem("myClicks")) : 0;

if (document.getElementById("productlist")) {
    document.getElementById("productlist")
    products.forEach(product => {
        let newoption = document.createElement("option")

        newoption.setAttribute("id", product.id)
        newoption.setAttribute("value", product.name)

        newoption.innerHTML = product.name

        productlist.appendChild(newoption)
    })
}

if (document.getElementById("reviewcount")) {
    document.getElementById("reviewcount").innerHTML = "Number of reviews submitted: " + currentValue;
}

if (document.getElementById("submitbutton")) {
    button.addEventListener("click", function () {
        var newValue = currentValue + 1;
        localStorage.setItem("myClicks", newValue);
    })
}