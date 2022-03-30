# Описание
Проект в рамках React 11.

[Выбранное API](https://rickandmortyapi.com/documentation/)

[Результат на GHP](https://steeksg.github.io/aston-task/)

# Требования

## 1 уровень (необходимый минимум)
#### React
- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми.
- [x] Есть четкое разделение на умные и глупые компоненты. [Страница умный](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/PageSearch.tsx). [Карточка глупый](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/search/cardCharacter/CardCharacter.tsx). 
- [ ] Есть рендеринг списков
- [x] Реализована хотя бы одна форма [К примеру форма регистрации, Box на строке 188 это форма](https://github.com/steeksg/aston-task/blob/46b369d2d80806d115d95de79d3768bef8fc305d/src/components/body/pages/sign/PageSign.tsx#L188).
- [ ] Есть применение Контекст API
- [ ] Есть применение предохранителя
- [ ] Есть хотя бы один кастомный хук
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
- [ ] Используется нормализованная структура стейта (createEntityAdapter).
- [ ] Подключен storybook и созданы несколько сторисов. (__Не хватило времени__)
- [x] Использование TypeScript. 
