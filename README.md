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
- [ ] Есть применение Контекст API
- [ ] Есть применение предохранителя
- [x] Есть хотя бы один кастомный хук. [Декларация](https://github.com/steeksg/aston-task/blob/master/src/utils/customHOCs/useFavorites.ts). [Применение 1](https://github.com/steeksg/aston-task/blob/092e6bcfb584ba1d0adbe0c5590aa5a287e7bdc3/src/components/body/pages/favorites/PageFavorites.tsx#L20). Применение 2](https://github.com/steeksg/aston-task/blob/092e6bcfb584ba1d0adbe0c5590aa5a287e7bdc3/src/components/body/pages/search/PageSearch.tsx#L27).
- [ ] Хотя бы несколько компонентов используют PropTypes
- [x] Поиск не должен триггерить много запросов к серверу. 

#### Redux
- [x] Используем Modern Redux with Redux Toolkit. [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts).
- [x] Используем слайсы. [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts).
- [ ] Есть хотя бы одна кастомная мидлвара 
- [x] Используется RTK Query.  [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts).
- [x] Используется Transforming Responses.  [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts).

## 2 уровень (необязательный)
- [ ] Проведена оптимизация приложения 
- [ ] Используются мемоизированные селекторы (createSelector).
- [ ] Используется нормализованная структура стейта (createEntityAdapter). [Здесь](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/searchSlice.ts)
- [ ] Подключен storybook и созданы несколько сторисов. (__Не хватило времени__)
- [x] Использование TypeScript. 

# Будующие доработки / известные проблемы

- Рефакторинг с целью удаления дублирующих участков кода.
- Рефакторинг "демонстрационных" фрагментов кода, предназначеных для визуализации пунктов требований.
- Поменять файловую структуру в пользу нахождения всех слайсов в одном месте.
- Переработать механизм общения с LS по принципу как обращение к бэку
