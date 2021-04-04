# Приложение на базе rickandmortyAPI
Ссылка на API: https://rickandmortyapi.com/

Ссылка на проект: https://kolodidon.github.io/rick-and-morty-app/#/

## Стак
- React
- TypeScript
- Redux (Redux Toolkit + React-redux)
- React-router-dom

## Как всё работает
### Корневой компонент App
В корневом компоненте App есть 2 страницы: главная и избранное:
```tsx
<Switch>
  <Route path="/" exact>
    <Search />
    <List />
  </Route>
  <Route path="/favorites" exact>
    <Favorites />
  </Route>
</Switch>
```
### Главная страница
На главной странице есть 2 компонента: Search и List
#### Search
Внутри три input'a, в которые задаются параметры запроса к API.
При нажатии на submit, содержимое input'ов фиксируется в state. 
Изменение значений в state триггерят useEffect в компоненте List -> Items и происходит запрос к серверу, с новыми параметрами.
#### List
Содержит компоненты Filters, Pagination и Items
- Filters: компонент для отображения текущих фильтров (то, что было вбито в input'ы в search). Если фильтров нет - компонент не отображается.
- Pagination: компонент-пагинатор. Получает из state количество страниц (эта информация есть в ответе сервера), сообщает в state о текущей странице просмотра. Изменение текущей  страницы триггерит useEffect в компоненте List -> Items и происходит запрос к серверу, с новыми параметрами текущей страницы.
- Items: компонент для инициализации запроса к серверу и вывода придедшего массива с объектами. Содержит компонент Item.
- Item: компонент для отображения отдельного персонажа. Внутри хранит состояние "избранности". При клике на звёздочку добавляет персонажа в массив favorites. При повторном клике, убирает из массива Favorites персонажа с переданным id.

### Странница избранных
Здесь всё просто:
```tsx
favorites.map((item: itemType) => (
  <Item
    key={item.id}
    dispatchAddToFavoriteAC={dispatchAddToFavoriteAC}
    dispatchDeleteFromFavoriteAC={dispatchDeleteFromFavoriteAC}
    favoritesId={favoritesId}
    obj={{ ...item }}
  />
));
```
