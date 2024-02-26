/*Задание 1
Напишите функцию filter(), фильтрующую массив объектов по значению свойства.
    Массив, название свойства и нужное значение должны передаваться в качестве
аргументов.Пример использования:*/

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

function filter(obj, key, fil) {
    for (let i = 0; i < obj.length; i++)
        if (obj[i][key] === fil) return obj[i];
}

let result = filter(objects, 'name', 'Иван');
console.log(result)

/*
Результат выполнения должен быть:
[
{ name: 'Иван', surname: 'Иванов' }
]
*/
