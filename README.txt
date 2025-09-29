Правовой центр Магнат — сайт

Файлы:
- index.html — главная страница сайта
- styles.css — стили
- script.js — скрипт для UX
- logo_magnat.png — логотип компании

=== Инструкция по запуску на GitHub Pages ===
1. Создайте пустой репозиторий на GitHub (например, magnat-site).
2. Скопируйте все файлы из архива в репозиторий.
3. Зайдите в Settings → Pages → Source → выберите main branch → Save.
4. Через минуту сайт будет доступен по адресу:
   https://ВАШ_ЛОГИН.github.io/magnat-site/

=== Настройка формы обратной связи ===
1. Зарегистрируйтесь на https://formspree.io
2. Создайте новую форму (New Project → New Form).
3. Укажите e-mail (magnat.pravo@bk.ru), подтвердите его через письмо.
4. Скопируйте Form ID (например: xyznqklr).
5. В файле index.html замените "YOUR_FORMSPREE_ID" на ваш реальный Form ID.
6. Теперь заявки с сайта будут приходить на e-mail.

=== Подключение бесплатного домена (Freenom) ===
1. Зарегистрируйте домен на https://www.freenom.com (например, magnat-pravo.tk).
2. В настройках домена укажите NameServers:
   ns1.github.io
   ns2.github.io
   ns3.github.io
   ns4.github.io
3. В репозитории GitHub создайте файл CNAME, внутри пропишите домен:
   magnat-pravo.tk
4. Через несколько часов сайт будет открываться по вашему домену.

