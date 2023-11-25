function calculateMortgage() {
    
    const averageSalary = parseInt(document.getElementById("averageSalary").value);
    const installments = parseInt(document.getElementById("installments").value);
    const age = parseInt(document.getElementById("age").value);
    const years = parseInt(document.getElementById("years").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value)
    const propertyValue = parseInt(document.getElementById("propertyValue").value)
    
    let dsti, dti;
    let monthlyPayment, r, y;

    if (age >= 18 && age <= 36) {
        dsti = parseInt(averageSalary * 0.50 - installments);
        dti = parseInt((averageSalary - installments) * 12 * 9.5);
        r = interestRate / (12 * 100);
        y = years * 12;
        monthlyPayment = (propertyValue * r * Math.pow(1 + r, y)) / (Math.pow(1 + r, y) - 1);
        monthlyPayment = parseFloat(monthlyPayment.toFixed(2));

        if (dsti <= 0) {
            const resultElement = document.getElementById("result");
            resultElement.textContent = "Bohužel, máte již vysoké splátky a hypotéku nedostanete.";
        } else {
            const resultElement = document.getElementById("result");
            resultElement.textContent = `Vaše měsíční splátka hypotéky může být maximálně ve výši ${dsti},- Kč a výše hypotéky může být maximálně ${dti},- Kč. Pro půjčku ${propertyValue} Kč s úrokovou sazbou ${interestRate}% na ${years} let je splátka ${monthlyPayment} Kč/měsíc. Nezapomeňte, že maximální výše Vaší hypotéky může být do 90% hodnoty nemovitosti. Tzn. pokud je hodnota Vaší vybrané nemovitosti ${propertyValue},-Kč, banka Vám půjčí maximálně ${propertyValue*0.90},-Kč a minimálně ${propertyValue*0.10},-Kč musíte zaplatit ze svého nebo z jiného zdroje.`;
            return;
        }
        
    } else if (age >= 37 && age <= 65) {
        dsti = parseInt(averageSalary * 0.45 - installments);
        dti = parseInt((averageSalary - installments) * 12 * 8.5);
        if (dsti <= 0) {
            const resultElement = document.getElementById("result");
            resultElement.textContent = "Bohužel, máte již vysoké splátky a hypotéku nedostanete.";
        } else {
            const resultElement = document.getElementById("result");
            resultElement.textContent = `Vaše měsíční splátka hypotéky může být maximálně ve výši ${dsti},- Kč a výše hypotéky může být maximálně ${dti},- Kč`;
            return;
        }
    } else {
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Váš věk je mimo povolený rozsah pro získání hypotéky.";
        return;
    }
    
}
document.getElementById("averageSalary").value = "";
document.getElementById("installments").value = "";
document.getElementById("age").value = "";
document.getElementById("years").value = "";
document.getElementById("interestRate").value = "";
document.getElementById("propertyValue").value = "";


