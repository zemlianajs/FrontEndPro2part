Зробити запит масиву героїв за адресою https://63693f7228cd16bba71904e4.mockapi.io/heroes і вивести отриманий масив у вигляді таблиці (таблицю виводимо в html за допомогою js). Таблиця складається з 4-х колонок:
        Name
        Comics (DC, Marvel)
        Favourite (чекбокс)
        Actions (одна кнопка Delete)

При зміні стану checkbox у колонці Favourite відбувається зміна даних щодо цього героя в базі (PUT). Значення властивості favourite може бути true/false.

При натисканні на кнопку Delete у рядку героя відбувається видалення з бази відповідного героя (DELETE) та видалення відповідної tr з таблиці.

В html верстаємо форму з трьома полями:
        Name (input)
        Comics (DC, Marvel) (select) – перелік комісів отримуємо методом GET з сутності universes (https://63693f7228cd16bba71904e4.mockapi.io/universes)
        Favourite (true, false) (checkbox).

При submit форми відбувається додавання героя в базу (POST) і рендер tr в таблицю з інформацією про щойно доданого героя (в таблицю відрендерену у пункті 1). Якщо в базі вже існує герой з такою ж властивістю name, то об'єкт не додається в базу (можна просто в консоль вивести інформацію, що користувач з таким ім'ям вже є в базі).


Приклад об'єкту сутності heroes:

{
  "name": "Iron Man",
  "comics": "Marvel",
  "favourite": true,
  "id": "1" (додається автоматично в базі)
}