/**
 * Задача №1
 * @param {number} height - Высота столба
 * @param {number} upDist - Расстояние, пройденное за день
 * @param {number} downDist - Расстояние, утраченное за ночь
 * @returns {number|null} Количество суток, нужное для достижения вершины. null - никогда не достигнет вершины
 */
const task1 = (height, upDist, downDist) => {
    if (!height) {
        return 0;
    }

    if (!upDist) {
        return null;
    }

    const diff = height - upDist;
    if (diff <= 0) {
        return 1;
    }

    const dayDistance = upDist - downDist;
    if (dayDistance <= 0) {
        return null;
    }

    return 1 + Math.ceil(diff / dayDistance);
};

/**
 * Задача №2
 * @param {number} n - Количество человек
 * @returns {number} Количество рукопожатий для n человек
 */
const task2 = (n) => {
    if (n < 0) {
        return 0;
    }
    return (n - 1) * n / 2;
}

/**
 * Задача №3
 * @param {string} string - Строка слов, разделённых запятой
 * @returns {string[]} Массив, содержащий уникальные значения
 */
const task3 = (string) => string
    .split(',')
    .reduce((words, currentWord) => {
        if (!words.includes(currentWord)) {
            words.push(currentWord);
        }
        return words;
    }, []);

console.log(`Ответ для 1-ой задачи: ${task1(100, 50, 30)}\n`
    + `Ответ для 2-ой задачи: ${task2(10)}\n`
    + `Ответ для 3-ей задачи: ${task3('кошка,собака,лошадь,корова,кошка,лев,мышь,носорог,собака,корова')}`);
