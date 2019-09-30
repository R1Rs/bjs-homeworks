function getSolutions(a,b,c) {
    let D = Math.pow(b,2) - 4 * a * c;
    if (D < 0) {
        return {D: D};
    } else if (D === 0) {
        let x1 = (-b) / (2 * a);
        return {roots: [x1], D: D}; // не понятно почему x1 возвращается как положительное число, если -b делает число отрицательным?
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {roots: [x1, x2], D: D};
    }
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log("Уровнение не имеет вещественных корней");
    } else if (result.D === 0) {
        console.log(`Уровнение имеет один корень X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// Второе задание меня совсем запутало. С чего начать?
let data = {name: []};
function getAverageScore(data) {
    return {
        name: []
    }
}
