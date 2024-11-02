const exchangeRate = 4409

function convertCurrency() {
    const dollars = document.getElementById("dollars").value
    const pesos = dollars * exchangeRate
    document.getElementById("result").textContent = `Eso son ${pesos} pesos.`
}
