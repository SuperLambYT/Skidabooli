{
    let intervalId;

    function startTimer() {
        const secondsInput = document.getElementById('secondsInput');
        const timerDisplay = document.getElementById('timerDisplay');
        const seconds = parseInt(secondsInput.value);

        if (isNaN(seconds) || seconds <= 0) {
            alert('Пожалуйста, введите корректное количество секунд больше нуля.');
            return;
        }

        timerDisplay.textContent = seconds;

        clearInterval(intervalId); // Остановка предыдущего таймера

        intervalId = setInterval(() => {
            secondsInput.disabled = true; // Запрет на изменение времени во время работы таймера
            let currentSeconds = parseInt(timerDisplay.textContent);
            if (currentSeconds <= 0) {
                clearInterval(intervalId);
                secondsInput.disabled = false; // Разрешаем изменение времени после окончания работы таймера
                return;
            }
            timerDisplay.textContent = currentSeconds - 1;
        }, 1000);
    }

    document.getElementById('startButton').addEventListener('click', startTimer);
    document.getElementById('stopButton').addEventListener('click', function() {
        clearInterval(intervalId);
        timerDisplay.textContent = '';
        secondsInput.value = '';
        secondsInput.disabled = false;
    });
}

{
    let timoutId;

    function delayedOutput() {
        const inputInH = document.getElementById('inputInH').value;
        if (isNaN(inputInH)) {
            alert('Пожалуйста, введите корректное данные');
            return;
        }
        document.getElementById('hOne').textContent = inputInH;
    }
    document.getElementById('inputInH').addEventListener('input', function() {
        clearTimeout(timoutId);
        timoutId = setTimeout(delayedOutput, 300);
    });
}