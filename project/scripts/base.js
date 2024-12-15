const d = new Date();
let year = d.getFullYear();

document.getElementById("currentyear").innerHTML = year;

let mod_date = document.lastModified;

document.getElementById("lastModified").innerHTML = "Last Modified: " + mod_date;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});