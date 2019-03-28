## zak-test-task

readme in progress...

### Детали реализации

Проект реализован с испотльзованием **React + Redux**

Инициализирован при помощи npm-пакета **create-react-app**

Хранилище создается фабрикой StoreFactory.
При инициализации используется localStorage для данных карзины.
Передача хранилища копонентам react - явная.

Структура хранилища:

```json
{
  "cart": [],
  "categories": {
    "data": [],
    "isLoadingData": boolean
  },
  "products": {
    "data": [],
    "isLoadingData": boolean
  }
}
```

Middleware fuctions:

- saver - для сохраниения карзины в localStorage
- logger - выводит на консоль детали диспетчеризации
- api - асинхронные запросы для получения категорий/товаров, и их сохранения в хранилище
