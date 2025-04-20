# Custom Shopify Theme — Based on Dawn

Це кастомізована Shopify-тема на основі Dawn. Вона містить власні секції, стилі, скрипти, та інші доробки.

## Вміст

-  На основі теми [Dawn](https://github.com/Shopify/dawn)
-  Кастомна секція `Featured Products` з AJAX-додаванням у кошик
-  Відображення попапу з вмістом кошика при додаванні до нього товару
-  Прибирання товарів з колекції товарів після його додавання у кошик

---

###  Вимоги

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/installation) (версія 3.x або новіша)
- Node.js (рекомендується остання LTS)
- Git

---

###  Встановлення та запуск проєкту

-  Обрати папку на своєму комп'ютері, у яку ви бажаєте скопіювати проєкт
-  Запустити команду git clone https://github.com/yourusername/your-shopify-theme.git
-  Перейти у папку з проєктом cd your-shopify-theme
-  Виконати команду npm i (install) для встановлення необхідних пакетів
-  Виконати команду shopify login --store your-store-name.myshopify.com та авторизуватись у свій shopify акаунт
-  Для редагування SCSS файлів потрібно запустити у своєму терміналі Gulp за допомогою команди npx gulp
-  Запустити проєкт командою shopify theme dev --store=your-store-name
