function convertTemperatura() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = `Eso son ${fahrenheit} grados Fahrenheit.`
}
