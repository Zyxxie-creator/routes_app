# Тестовое задание "Приложение по отображению маршрутов на карте"

![Alt Text](demo.gif)

* Задача:

  Используя заданный набор маршрутов (таблица 1), реализовать экран, в котором слева будет таблица со списком маршрутов, а справа карта. При выборе в таблице строки с маршрутом, выбранная строка должна подсветиться, а на карте должны отобразиться точки маршрута в виде маркеров и полилиния (polyline) трека движения по точкам маршрута, полученная из сервиса построения треков по дорогам OSRM (или другой). При выборе маршрута в таблице, на карте происходит центрирование и масштабирование таким образом, что весь маршрут должен попасть в область видимости карты. Одновременно на карте может отображаться только один маршрут – выбранный.

Для получения полилиний (polylines) маршрута можно использовать API OSRM:

http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service

Таблица 1 – Список маршрутов
![alt text](https://lh6.googleusercontent.com/zdU-TXBegzRLuiy-ktXF_BhLa70AjYsp19Sts3XggXYKotfUF6WctpTMkB9nEiq3OOSOjRjwdIvbY185a-5KjNbvK1Wab3DvZXVFdonVZKPmRlB586Uamuz9EuzNOrTF3g=w740)
## Разработка решения
## Выбор и настройка основы приложения:

* Рассмотреть React Create App или Vite в качестве основы приложения.
* Создать проект и настроить окружение.
## Установка необходимых пакетов:

* Установить и настроить Leaflet для отображения карты.
* Установить AntDesign для использования компонентов.
* Установить Redux (redux-toolkit) для хранения стейта компонентов и данных.
* Установить Sagas для реакции на события.
## Разработка функциональных компонентов:

* Создать функциональные компоненты для различных частей приложения.
* Разбить код по каталогам: components, selectors, reducers, sagas, HTTP-services, helpers, и т.д.
## Использование Sagas для получения трека по точкам:

* Реализовать Sagas для обработки событий и запросов данных.
* Использовать Sagas для получения трека по точкам с API.
## Обработка ошибок от HTTP-сервисов:

* Учесть возможность ошибок при обращении к HTTP-сервисам.
* Настроить обработку ошибок и сообщений об ошибках для пользователей.
## Написание стилей:

* Использовать препроцессор SASS/LESS для написания CSS-стилей.
* Реализовать стилизацию компонентов и элементов интерфейса.
## Проверка и тестирование:

* Провести тестирование приложения, включая компонентные и интеграционные тесты.
* Убедиться, что все функции работают должным образом.
## Оптимизация и завершение:

* Произвести оптимизацию кода и устранение возможных узких мест.
* Завершить разработку приложения и убедиться в его работоспособности.
## Документация:

* Добавить комментарии к коду для улучшения его читаемости.

* Тестирование производительности:

* Протестировать производительность приложения и внести необходимые изменения для оптимизации.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
