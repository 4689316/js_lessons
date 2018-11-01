alert('Результат выполнения ДЗ №4 выводится в консоли');

// Задание 1
console.log('Задание 1');
// Просим ввести число и проверяем что введену именно число. Если нет то попросим ввести еще раз
var a = +prompt('Для задания 1 придумайте число от 0 до 999 :');
while (!isNumeric(a) ||  a < 0  || a >= 999 ) {
	a = prompt('Вы ввели не допустимое значение, должно быть число от 0 до 999 попробуйте еще раз: ')
}

// Функция проверки является ли значение числом
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

// Создание требуемого в задании объекта, разбиение чисел по свойствам и вывод
var number = {
	units: a - Math.floor(a / 10) * 10,
	tens: Math.floor(a / 10 - Math.floor(a / 100) * 10),
	hundreds: Math.floor(a / 100)
}
console.log(number);
console.log('');

// Задание 2
console.log('Задание 2');
console.log('Решение задания 2 находится в отдельной папке "Black BookShop Upgraded". ');
var div = document.createElement('div');
div.innerHTML = 'Решение задания №2: <br> <a href="BlackBookShopUpgraded/index.html" target="blank">/BlackBookShopUpgraded/index.html</a>';
document.body.appendChild(div);
//alert('<a href="/BlackBookShopUpgraded/index.html">/BlackBookShopUpgraded/index.html</a>')
console.log('');

// Задание 3 (Переработка Корзины на объекты)
console.log('Задание 3 Переработка Корзины на объект');
// массив basket будет содержать объекты товаров. Объекты в своб очередь будут иметь свойства: ID товара из БД (артикуль) и количество товара которое пользователь добавил себе в корзину.  

// Создадим объекты товаров и заполним ими массив.
var basket = [];
for (i = 1; i <= 7; i++) {
	let basketItem = {
		id : 'art' + '0020' + Math.floor(Math.random()*99),
		qantity : Math.floor(Math.random()*99)
	}
	basket.push(basketItem);
}
console.log('Содердимое корзины: ');
console.log(basket);

// Функция подсчета стоимости 
var busketSummation = function(basket) {
	// Создадим локальный массив с данными из корзины, чтобы не менять данные в глобальном
	let basketLocal = basket;
	// В идеале надо получить стоимость товаро из ДБ. Но т.к. этого еще не проходили, то вместо функции работы с БД заполню данные о стоимости случайными числами.
	
	for (i = 0; i < basketLocal.length; i++) {
		basketLocal[i].price = (Math.floor(Math.random() * 10 + 1));
		console.log('Стоимость товара ' + basketLocal[i].id + ' установлена = ' + basketLocal[i].price)

	}
	console.log('Содердимое корзины c ценами: ');
	console.log(basketLocal);
	// Посчитаем стоимость товаров
	for (i=0; i < basketLocal.length; i++) {
		basketPrice = (basketPrice + (basketLocal[i].qantity * basketLocal[i].price));
		//console.log(basketPrice);
	}
	return basketPrice;
}

var basketPrice = 0;

console.log('Стоимост всех товаров в корзине = ' + busketSummation(basket));