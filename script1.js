alert('Результат выполнения ДЗ №3 выводится в консоли');

// Задание 1
console.log('Задание 1');
var i=0;
while	(i<=100) {
	if ((i%2)!=0 && (i%3)!=0 && (i%5)!=0) {
		console.log('Простое число: ' + i);
	}
	i++;
}
console.log('');

// Задание 2
console.log('Задание 2');

i=0;
do {
	if (i==0) {
		console.log(i + ' - это ноль');
	} else if (i%2==0) {
		console.log(i + ' - четное число');
	} else {
		console.log(i + ' - нечетное число');
	}
	i++;
} while	(i<=10)
console.log('');

// Задание 3
console.log('Задание 3');

for (i=0; i <= 9; console.log(i++ + ' ')) {}
console.log('');

// Задание 4
console.log('Задание 4');

var x = '';
for (i=1; i <= 20; i++) {
	x = x + 'x';
	console.log(x);
}
console.log('');

// Задание 2 из методички
console.log('Задание 2 из методички');
// массив basket будет содержать ID товара из БД (артикуль) и коилчество этого которое пользователь добавил себе в корзину.  
var basket = [['art1', 2], ['art23', 1], ['art12', 4]]; // Для примера заполнил данными из головы
var basketPrice = 0;
console.log('Содержимое корзины: ' + basket);
console.log(basket);

var busketSummation = function(basket) {
	// Создадим локальный массив с данными из корзины, чтобы не менять данные в глобальном
	let basketLocal = basket;
	// В идеале надо получить стоимость товаро из ДБ. Но т.к. этого еще не проходили, то вместо функции работы с БД заполню данные о стоимости случайными числами.
	
	for (i = 0; i < basketLocal.length; i++) {
		basketLocal[i].push(Math.floor(Math.random() * 10+1));
		console.log('Стоимость товара ' + basketLocal[i][0] + ' установлена = ' + basketLocal[i][2])
	}
	console.log(basketLocal);
	// Посчитаем стоимость товаров
	for (i=0; i < basketLocal.length; i++) {
		basketPrice = (basketPrice + (basketLocal[i][1] * basketLocal[i][2]));
	//	console.log(basketPrice);
	}
	return basketPrice;
}

console.log('Стоимост всех товаров в корзине = ' + busketSummation(basket));
