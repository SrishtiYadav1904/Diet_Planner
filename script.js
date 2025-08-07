function generateCalories() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const goal = parseFloat(document.getElementById("goal").value);

    if (!height || !weight || !goal) {
        document.getElementById("result").innerText = "Please fill all fields.";
        return;
    }

    // Simple formula for calorie recommendation
    const baseCalories = 22 * weight; // Approx BMR estimate
    let adjustment = (goal < weight) ? -300 : 300; // Adjust based on goal
    const totalCalories = baseCalories + adjustment;

    document.getElementById("result").innerText = `Recommended Calorie Intake: ${totalCalories.toFixed(0)} kcal/day`;
}

function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "☀️ Good Morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "🌞 Good Afternoon!";
    } else {
        greeting = "🌙 Good Evening!";
    }

    greetingElement.textContent = greeting;
}

// Call when page loads
window.onload = setGreeting;