## zak-test-task

### Детали реализации

Проект реализован с использованием **React + Redux**

Инициализирован при помощи npm-пакета **create-react-app**

Хранилище создается фабрикой StoreFactory.
При инициализации используется localStorage для данных корзины.
Передача хранилища компонентам react - явная.

Структура хранилища:

```json
{
  "cart": [],
  "categories": {
    "data": [],
    "isLoadingData": bool
  },
  "products": {
    "data": [],
    "isLoadingData": bool
  }
}
```

Middleware fuctions:

- saver - для сохранения корзины в localStorage
- logger - выводит на консоль детали диспетчеризации
- api - асинхронные запросы для получения категорий/товаров, и их сохранения в хранилище