const d = new Date();
let year = d.getFullYear();

document.getElementById("currentyear").innerHTML = year;

let mod_date = document.lastModified;

document.getElementById("lastModified").innerHTML = "Last Modified: " + mod_date;