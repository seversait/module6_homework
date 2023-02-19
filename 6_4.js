function countInOrderEverySecond(number_1, number_2) {
    let progress = number1;

    let intervalId = setInterval(function () {
        if (progress <= number_2) {
            console.log(progress);
            progress++;
        }
        else clearInterval(intervalId);
    }, 1000);
}

countInOrderEverySecond(3, 10);