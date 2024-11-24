temperature = 42
conditions = 'Partly Cloudy'
wind = 15


// 35.74 + 0.6215T – 35.75(V0.16) + 0.4275T(V0.16)


//to do: decide whether the inputs fall into the range for the calculation (<=50 deg F, >3mph)
const calculateWindChill = function (T, V) {
    return 35.74 + (0.6215 * T) - (35.75 * (Math.pow(V, 0.16))) + ((0.4275 * T) * (Math.pow(V, 0.16)))
}

document.getElementById("temp").innerHTML = temperature;
document.getElementById("conditions").innerHTML = conditions;
document.getElementById("wind").innerHTML = wind;

const windChill = calculateWindChill(temperature, wind);
document.getElementById("chill").innerHTML = windChill.toFixed(2);