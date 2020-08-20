## Ответы на теоретические вопросы

## Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения пользователя;  менеджера проекта;  дизайнера;  верстальщика;  клиентского программиста;  серверного программиста. 

С точки зрения пользователя хорошая верстка отличается от плохой корректным отображением элементов интерфейса на разных устройствах. Если у сайта нет версии под мобильные устройства, все элементы интерфейса получаются мелкими и с ними сложно взаимодействовать. Также если сайт не является кроссбраузерным, элементы интерфейса могут быть недоступны в некоторых браузерах. Еще есть проблема “поехавшей” верстки, в таком случае элементы верстки налазят друг на друга, и пользователю сложно разобраться с интерфейсом. Еще одной проблемой может быть подвисание веб-страницы, т. е. медленная загрузка сайта, при которой пользователь закрывает страницу, так и не дождавшись ее загрузки. Дополнительно можно выделить проблемы UX. Сайт вроде загружается быстро, все элементы находятся на своих местах, есть мобильная версия, но сайт неудобно использовать. Например, пользователь получает негативный опыт взаимодействия с сайтом, если не может быстро найти нужный пункт меню или кнопку. Еще одна проблема: доступность сайта для людей с ограниченными возможностями, инвалидностью (доступность достигается использованием семантического html).

С точки зрения менеджера проекта плохая верстка может означать потенциальные проблемы с заказчиком, ведь интерфейс продукта - это лицо компании. Сюда же, возможно, можно отнести проблемы с продвижением сайта в поисковых системах (SEO).

С точки зрения верстальщика и клиентского программиста хорошая верстка отличается от плохой тем, что ее сложно поддерживать, масштабировать, переиспользовать.

С точки зрения дизайнера хорошая верстка максимально точно повторяет дизайн-макет.

## Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.

Необходимо сразу давать всем элементам интерфейса осмысленные имена классов для того, чтобы в дальнейшем элементы можно было переиспользовать. Для этого можно воспользоваться, например, методологией BEM. 

Как инструмент для непосредственного переиспользования элементов и компонентов нужно использовать препроцессоры, которые позволяют при изменении требований и функциональности быстро и безболезненно изменить сайт с помощью переменных, миксинов, вложенностей и др. 

Также хорошо, когда на проекте есть стайл гайды, которые  экономят много времени верстальщикам и программистам.

## Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать. 

Для того, чтобы верстка выглядела одинаково хорошо и на компьютере, и на мобильном устройстве, планшете, необходимо использовать медиа-запросы, которые позволяют ограничивать ширину макета и при достижении определенного значения ширины экрана применяют другой стиль.

Также современные браузеры используют разные движки, и для применения стилей в этих браузерах нужно использовать вендорные префиксы.

Кроме вендорных префиксов, у браузеров есть еще одна особенность - у них разные дефолтные стили. Их можно и нужно сбрасывать.

В своей работе для того, чтобы проверить, как работают все вышеперечисленные моменты, я использую DevTools, открываю макет в необходимых браузерах и разных устройствах.

## Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода. 

DevTools, webpack, препроцессоры (использую sass), расширения vscode.

## Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике? 

DevTools помогают проанализировать примененные стили в разных браузерах.

## Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия? 

Возвращаюсь к дизайнеру с соответствующим вопросом. Если с этим есть какие-то проблемы, применяю свой стиль, и уточняю у заказчика, нравится ли ему.

## Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). 
## Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое? 
## Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны? 

Ресурсы: официальная документация; статьи на habr, tproger, medium; youtube каналы webDev Евгения Кавальчука, канал Владилена Минина, Rolling Scopes School, Devcalibri, канал Вадима Макеева; книги (сейчас читаю Компьютерные сети Куроуз, Росс); решаю задачи на Codewars; learnjavascript.ru; занимаюсь в онлайн школе Rolling Scopes School.

Из направлений развития мне больше интересно JS-программирование, особенно с использованием фреймворков. Сейчас я уже знаю и умею использовать React.js. В дальнейшем очень интересно изучить React Native, Vue.js, Node.js.

## Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами. 

Я - Вероника, мне 27 лет. В 2015 году я закончила Белорусский Государственный Экономический университет. Работала бизнес-аналитиком, хорошо умею общаться с клиентами и выявлять их потребности и требования. Начала интересоваться фронтенд разработкой чуть больше года назад. Имею опыт разработки максимально приближенного к коммерческому проекта (с использованием технологий React.js + redux + redux-saga)! Вот некоторые мои последние работы (первый проект командный, поэтому там будут также коммиты других участников):

1. Link: https://rslang-team24-chebb44.netlify.app/
GitHub: https://github.com/chebb44/rs-lang-24
2. Link: https://veronika-martinovich-songbird.netlify.app/
GitHub: https://github.com/veronika-martinovich/songbird
3. Link: https://veronika-martinovich-fancy-weather.netlify.app/
GitHub:https://github.com/veronika-martinovich/fancy-weather/tree/fancy-weather
4. Link: https://veronika-martinovich-movie-search.netlify.app/
GitHub:https://github.com/veronika-martinovich/movie-search/tree/movie-search
5. Link: https://veronika-martinovich-english-for-kids.netlify.app
GitHub:https://github.com/veronika-martinovich/english-for-kids/tree/english-for-kids
6. Link: https://veronika-martinovich.github.io/singolo/
GitHub: https://github.com/veronika-martinovich/singolo


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
