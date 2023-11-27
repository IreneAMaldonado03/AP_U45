document.getElementById('healthForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var age = document.getElementById('age').value;
    var allergies = document.getElementById('allergies').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var bmi = weight / (height / 100) ** 2;
    var result = document.getElementById('result');
    var suggestion = document.getElementById('suggestion');
    result.textContent = 'Tu IMC es: ' + bmi.toFixed(2);
    if (bmi < 18.5) {
        suggestion.textContent = 'Debes aumentar de peso. Una buena opción podría ser un plato de pasta.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        suggestion.textContent = 'Tu peso está en el rango saludable. Podrías considerar hacer ejercicio para mantenerlo así.';
    } else if (bmi >= 25 && bmi < 29.9) {
        suggestion.textContent = 'Estás en sobrepeso. Podrías considerar hacer ejercicio y cambiar tu dieta.';
    } else {
        suggestion.textContent = 'Estás en obesidad. Necesitas hacer ejercicio y cambiar tu dieta.';
    }
 });