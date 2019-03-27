## zak-test-task

readme in progress...

### Детали реализации

Проект реализован с испотльзованием **React + Redux**

Bнициализирован при помощи npm-пакета **create-react-app**

Хранилище создается фабрикой StoreFactory.
При инициализации используется localStorage для донных карзины.

Структура хранилища:

```json
(store = {
  "cart": [],
  "categories": {
    "data": [],
    "isLoadingData": false
  },
  "products": {
    "data": [],
    "isLoadingData": false
  }
})
```

Middleware fuctions:

- saver - для сохраниения карзины в localStorage
- logger - выводин на консоль детали диспетчеризаций
- api - асинхронные запросы для получения категорий/товаров, и их сохранения в хранилище
