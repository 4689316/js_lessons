alert('Результат выполнения ДЗ №2 выводится в консоли');

// Задание 1
console.log('Задание 1');
var a = 1, b = 1, c, d;
c = ++a; console.log('"c = ++a;" выдает: ' + c + ' т.к. сначала оператор "++" увеличивает переменную на единицу и потом выполняется операция присвоения'); // 2
d = b++; console.log('"d = b++;" выдает: ' + d + ' т.к. сначал выполняется операция присвоения и затем уже оператор "++" увеличивает переменную на единицу'); // 1
c = (2+ ++a); console.log('"c = (2+ ++a);" выдает: ' + c + ' т.к. сначала оператор "++" (при этом мы помним что "а" уже было равно "2" до этой операции) увеличивает переменную на единицу, затем выполяется ее сложение с "2"'); // 5
d = (2+ b++); console.log('"d = (2+ b++);" выдает: ' + d + ' т.к. сначала выполяется операция сложения (при этом "b" уже был равен 2) и  затем уже оператор "++" увеличивает переменную на единицу'); // 4
console.log('"а" равно ' + a); // 3
console.log('"b" равно ' + b); // 3
console.log('');

// Задание 2
console.log('Задание 2');
console.log('В Выражении "var a = 2; var x = 1 + (a *= 2);" х будет равняться: 5');
var a = 2; var x = 1 + (a *= 2);
console.log('"а" равно ' + x); // 3
console.log('');

// Задание 3
console.log('Задание 3');
a = Math.floor((Math.random()-0.5)*10);
b = Math.floor((Math.random()-0.5)*10);
console.log('a = ' + a + ' и b = ' + b);
if (a>=0 && b>=0) {
	console.log('a-b = ' + (a-b));
} else if (a<0 && b<0) {
	console.log('a*b = ' + (a*b));
} else {
	console.log('a+b = ' + (a+b));
}
console.log('');

// Задание 4
console.log('Задание 4');
a = Math.floor(Math.random()*15+1);
console.log('a = ' + a);
switch (a) {
	case 0:
	console.log('0');
	case 1:
	console.log('1');
	case 2:
	console.log('2');
	case 3:
	console.log('3');
	case 4:
	console.log('4');
	case 5:
	console.log('5');
	case 6:
	console.log('6');
	case 7:
	console.log('7');
	case 8:
	console.log('8');
	case 9:
	console.log('9');
	case 10:
	console.log('10');
	case 11:
	console.log('11');
	case 12:
	console.log('12');
	case 13:
	console.log('13');
	case 14:
	console.log('14');
	default:
	console.log('15');
}
console.log('');

// Задание 5
console.log('Задание 5');
a = Math.floor(Math.random()*10+1);
b = Math.floor(Math.random()*10+1);
var sum = function (a, b) {
	return (a + b);
}
var subtraction = function (a, b) {
	return (a-b);
}
var multiplication = function (a, b) {
	return (a*b);
}
var division = function (a, b) {
	if (b==0) {
		return console.log('Ошибка деление на "0"');
	}
	return (a/b);
}
console.log('a = ' + a + ' и b = ' + b);
console.log('Сложение = ' + sum(a, b));
console.log('Вычитание = ' + subtraction(a, b));
console.log('Умножение = ' + multiplication(a, b));
console.log('Деление = ' + division(a, b));
console.log('');

// Задание 6
console.log('Задание 6. Параметры a и b берутся из предыдущего задания.');
var mathOperation = function (a, b, operation) {
	switch (operation) {
		case 1:
		console.log('Сложение = ' + sum(a, b));
		break;
		case 2:
		console.log('Вычитание = ' + subtraction(a, b));
		break;
		case 3:
		console.log('Умножение = ' + multiplication(a, b));
		break;
		case 4:
		console.log('Деление = ' + division(a, b));
		break;
	}
}
var chooseOpearion = function (operation){
	if (oper==1 || oper==2 || oper==3 || oper==4) {
		mathOperation(a,b,operation);
	} else {
		oper = + prompt('Вы выбрали не верное значение для задаения №6. Попробуйте еще раз: 1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление');
		chooseOpearion(oper);
	}
}
var oper = + prompt('Для задаения №6 выбирете операцию: 1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление');
chooseOpearion(oper);
console.log('');

// Задание 7
console.log('Задание 7');
if (null == 0) {
	console.log('Null == 0');
} console.log('Выражение Null == выдает значение: ' + (null == 0) + ' т.к. Null - это отсутсвия какого-либо значения, а "0" - это просто число');
console.log('');

// Задание 8
console.log('Задание 8');
// специально использовал другой синтаксис функций, чтобы проверить будет-ли работать как указано в методичке
function power(val, pow) {
	if (pow > 1) {
		val = val * power (val, (pow-1));
	}
	return val;
}
a = + prompt('Для задания №8 выбирете число которое будем возводить в степень:');
b = + prompt('А теперь степень в которую надо возвести это число:');
console.log(a + ' в степени ' + b + ' = ' + power(a, b));
