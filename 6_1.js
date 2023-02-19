let array = [1, 2, null, 3, "b", 4, 'zubr', 5, null, 5];

function countEvenAndOddElements() {
    let even = 0;
    let odd = 0;

    array.map(function (item, index, array) {
        if (item == null) {
            console.log("Элемент " + index + " равен null.");
            return;
        }

        if (typeof item == "string") {
            console.log("Тип элемента " + index + " - строка.");
            return;
        }

        if (item % 2 === 0) even++;
        else odd++;
    });

    console.log("Чётных: " + even);
    console.log("Нечётных: " + odd);
}

countEvenAndOddElements();