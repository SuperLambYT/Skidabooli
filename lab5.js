//Задание 1
/*Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный
список. В качестве аргументов функция должна принимать: массив строк с исходными
email адресами, массив строк с email адресами в чёрном списке.

Рекомендации к выполнению
Не спешите называть функцию в соответствии с формулировкой задания. Подумайте, где
ещё можно применить данную функцию, и попробуйте дать ей соответствующее
название.
Для проверки наличия в массиве значения можно использовать один из двух методов
(array - переменная, в которой необходимо произвести проверку):
 array.indexOf(&#39;значение для проверки&#39;) вернёт индекс элемента, если он есть в
массиве. А если значение не будет найдено, то метод вернёт -1.
 array.includes(&#39;значение для проверки&#39;) вернёт просто true, если элемент найден,
false в противном случае.*/
// let email = ["wer@gimail.com", "qwer@gmail.com"];
// let blacklist = ["qwer@gmail.com"];

// function filter(wer, cree) {
//     let true1 = [];
//     for (let el of wer) if (!cree.includes(el))  true1.push(el)
//     return true1;
// }
// console.log(filter(email, blacklist));

//Задание 2
/*Напишите функцию calculate(), которая вычисляет и возвращает стоимость корзины
товаров после применения всех скидок. В качестве аргументов функция принимает 3
параметра:

 Общая сумма корзины
 Количество товаров в корзине
 Промокод (по умолчанию null)

Правила и порядок (порядок важен!) начисления скидок:

1. Если промокод равен &#39;ДАРИМ300&#39;, то из суммы вычитается 300 рублей. При этом
если сумма меньше 300 рублей, то итоговая стоимость будет 0.

2. При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме

3. При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения
(то есть к разнице суммы корзины и 50 000)

4. Если промокод равен &#39;СКИДКА15&#39;, то ко всей сумме применяется скидка 15%, но
только если сумма ≥20 000

Каждая следующая скидка должна проверяться и применяться к сумме после применения
предыдущих скидок.*/ 

function calculate(price, itemsCount, promoCode = null) {
    if (promoCode === "ДАРИМ300")
    {
        if (price > 300) {
            price = price - 300
            console.log("Вы использовали промокод 'ДАРИМ300'")
        }
        else {
            price = 0;
            console.log("Цена вашей покупки равна 0.")
        } 
    }

    if (itemsCount >= 10) {
        price *= 0.95;
        console.log("К вашей покупке применена скидка 5%.")
    }


    if (promoCode === "СКИДКА15" && price >= 20000) {
        price *= 0.85;
        console.log("Сумма вашей покупки привышает 20000 тысяч. К вашей покупке применена скидка 15%.")
    }

    if (price > 50000) {
        price = 50000 + (price - 50000) * 0.8;
        console.log("К вашей покупке применена скидка 20%.")
    }
  
    return Math.round(price * 100) / 100
}
console.log(calculate(50400, 10, "ДАРИМ300"));