# Исходный код сайта пермская лавка.

Если вы хотите скачать проект себе на компьютер, убедитесь что у вас установлено следующее:
* nodejs ^12.0.0
* npm ^10.0.0
* gulp-cli ^3.0.0
* git ^2.0.0

## Установка
1. Скопируйте репозиторий
```bash
git clone https://github.com/mono245/permskaya-lavka.git
```

2. Установите зависимости
```bash
npm install && npm install -D
```

## Сборка
Есть два режима сборки: dev и build.

### dev:
* Упускается минификация файлов, что увеличивает скорость сборки, но уменьшает скорость загрузки страницы.
* Включаются наблюдатель за изменениями файлов.
* Подходит для разработки.
* Для запуска введите следующее: ```npm run dev```  

### build:
* Минифицируются все файлы, что уменьшает скорость сборки, но увеличивает скорость загрузки страницы.
* Не включаются наблюдатель за изменениями файлов.
* Подходит для продакшена.
* Для запуска введите следующее: ```npm run build```
