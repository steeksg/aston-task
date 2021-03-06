# Описание
Проект в рамках React 11.

[Выбранное API](https://rickandmortyapi.com/documentation/)

[Результат на GHP](https://steeksg.github.io/aston-task/)

# Требования

## 1 уровень (необходимый минимум)
#### React
- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми.
- [x] Есть четкое разделение на умные и глупые компоненты. [Страница умный](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/PageSearch.tsx). [Карточка глупый](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/cardCharacter/CardCharacter.tsx). 
- [x] Есть рендеринг списков. [Список записей в истории](https://github.com/steeksg/aston-task/blob/master/src/components/body/pages/history/PageHistory.tsx)
- [x] Реализована хотя бы одна форма. [К примеру форма регистрации, Box на строке 188 это форма](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/sign/PageSign.tsx#L188).
- [x] Есть применение Контекст API. [Обьявление](https://github.com/steeksg/aston-task/blob/master/src/App.tsx). [Использование](https://github.com/steeksg/aston-task/blob/cdd75c43eabb07ed18d784049b91b37fe0eabd7c/src/components/header/Header.tsx#L20). Конструкция дикая и реализована только ради требования демонстрации использования.
- [x] Есть применение предохранителя. [Сам предохранитель](https://github.com/steeksg/aston-task/blob/master/src/components/body/pages/search/Boundary.tsx). [Завёл для демонстрации компонент который тригерит ошибку](https://github.com/steeksg/aston-task/blob/ed9881169d9d2fe605450e07d2b285e4b738f6e2/src/components/body/pages/search/PageSearch.tsx#L28).
- [x] Есть хотя бы один кастомный хук. [Декларация](https://github.com/steeksg/aston-task/blob/master/src/utils/customHOCs/useFavorites.ts). [Применение 1](https://github.com/steeksg/aston-task/blob/092e6bcfb584ba1d0adbe0c5590aa5a287e7bdc3/src/components/body/pages/favorites/PageFavorites.tsx#L20). [Применение 2](https://github.com/steeksg/aston-task/blob/092e6bcfb584ba1d0adbe0c5590aa5a287e7bdc3/src/components/body/pages/search/PageSearch.tsx#L27).
- [x] Хотя бы несколько компонентов используют PropTypes. [Применение классовым компонентом](https://github.com/steeksg/aston-task/blob/f57a3b9364e4f47fc22cf0ef93aea40319786eba/src/components/body/pages/search/Boundary.tsx#L18). [Применение функциональным компонентом](https://github.com/steeksg/aston-task/blob/f57a3b9364e4f47fc22cf0ef93aea40319786eba/src/components/body/pages/search/cardCharacter/CardCharacter.tsx#L71).
- [x] Поиск не должен триггерить много запросов к серверу. 

#### Redux
- [x] Используем Modern Redux with Redux Toolkit. [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts).
- [x] Используем слайсы. [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts).
- [x] Есть хотя бы одна кастомная мидлвара. [Простейшая миделвара на логирование входящего пользователя](https://github.com/steeksg/aston-task/blob/460c8d9505ea20b32a60aebb0bfc5bdf4e220a9e/src/redux/store.ts#L7).
- [x] Используется RTK Query.  [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts).
- [x] Используется Transforming Responses.  [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts).

## 2 уровень (необязательный)
- [ ] Проведена оптимизация приложения 
- [ ] Используются мемоизированные селекторы (createSelector).
- [ ] Используется нормализованная структура стейта (createEntityAdapter). [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts)
- [ ] Подключен storybook и созданы несколько сторисов. (__Не хватило времени__)
- [x] Использование TypeScript. 

# Будующие доработки / известные проблемы

- Рефакторинг под респонсив
- Добавить дебоунс на поисковой ввод
- Рефакторинг с целью удаления дублирующих участков кода.
- Рефакторинг "демонстрационных" фрагментов кода, предназначеных для визуализации пунктов требований.
- Поменять файловую структуру в пользу нахождения всех слайсов в одном месте.
- Переработать механизм общения с LS по принципу как обращение к бэку через миделвару
- Перебрать обращение к АПИ чтобы устранить отправку NaN запроса и универсализировать поиск
- Рефакторинг для использования всех возможностей АПИ
- Привести всё к единому компоненту поиска со всеми фильтрами
- Доделать пункты второго уровня
