Весь код пишемо на основі синтаксису JQuery.

Робимо GET-запит на отримання данних https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json.

{
   "color": "#2e2e2e",
   "img": "black",
   "title": "Solid Black"
}

color – колір блоку, при натисканні на який змінюємо url машини на https://mc-astro.github.io/tesla-roadster-colors/img/${img}.jpg.

img – назва картинки

title – підпис картинки

Рендеримо данні з отриманного файлу у вигляді https://mc-astro.github.io/tesla-roadster-colors/. Рендеримо лише фото машини, title і блок з кольорами.