function calculateBMI() {
    const height = parseFloat(document.getElementById('bmiHeight').value);
    const weight = parseFloat(document.getElementById('bmiWeight').value);
    const resultDiv = document.getElementById('bmiResult');

    if (!height || !weight || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = "⚠️ Please enter valid height and weight.";
        resultDiv.style.color = "red";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
        resultDiv.style.color = "#ff9800";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
        resultDiv.style.color = "#4CAF50";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        resultDiv.style.color = "#ff5722";
    } else {
        category = "Obese";
        resultDiv.style.color = "#f44336";
    }

    resultDiv.innerHTML = `Your BMI: <strong>${bmi}</strong> (${category})`;
}