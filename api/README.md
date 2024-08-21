
# Документация для API

## Авторизация

### Вход
__POST__ ```/api/auth/login``` - Вход в аккаунт.

Пример body запроса:
```
{
    "username": "admin",
    "password": "123"
}
```
*Возвращается JWT токен*

### Создание аккаунта
__POST__ ```/api/auth/register``` - Создание нового пользователя.

Пример body запроса:
```
{
    "username": "admin",
    "password": "123"
}
```
*Возвращается JWT токен*

## Работа с темами и сообщениями

### Новые темы
__GET__ ```/api/topics/new``` - Получение новых тем.

Пример параметра  
```/api/topics/new?limit=10```

*Возвращается массив тем по примеру ниже*
```
{
    "id": 1,
    "title": "Topic 1"
    "description": "Description of topic 1"
}
```

### Создание темы
__POST__```/api/topics/createtopic``` - Создание новой темы.

Пример body запроса:
```
{
    "title": "text",
    "description": "text"
}
```

*Ничего не возвращает*

### Получение тем пользователя
__GET__```/api/topics/mytopics``` - Получение "моих" тем.

*Возвращается массив тем по примеру ниже*
```
{
    "id": 1,
    "title": "Topic 1"
    "description": "Description of topic 1"
}
```

### Получение темы подробно (с сообщениями)
__GET__```/api/topics/gettopic``` - Получение темы с массивом сообщений.

*Возвращается тему по примеру ниже*
```
{
    "id": 1,
    "title": "Topic 1"
    "description": "Description of topic 1"
    "messages": [
        {
            "id": 1,
            "text": "text",
            "author_id": 1
        }
    ]
}
```

### Создание сообщения
__POST__```/api/topics/createmessage``` - Создание сообщения под темой.

Пример body запроса:
```
{
    "topic_id": 1,
    "text": "text"
}
```

*Ничего не возвращает*

## Книги

### Создание книги
__POST__```/api/books/createBook``` - Создание новой книги.

Пример body запроса:
```
{
    "name": "text",
    "description": "text",
    "author_id": number,
    "genre_id": number
}
```

*Ничего не возвращает*

### Получение книги по названию
__GET__```/api/books/getByName?name=name``` - Получение книги с названием "name".

*Возвращается книга по примеру ниже*
```
{
    "id": 1,
    "name": "Книга 1"
    "description": "Description of Книга 1",
    "author_name": "name",
    "author_id": 1,
    "genre_name": "name",
    "genre_id": 1
}
```

### Получение книги по id
__GET__```/api/books/getById?id=1``` - Получение книги с id 1.

*Возвращается книга по примеру ниже*
```
{
    "id": 1,
    "name": "Книга 1"
    "description": "Description of Книга 1",
    "author_name": "name",
    "author_id": 1,
    "genre_name": "name",
    "genre_id": 1
}
```

### Получение книги по жанру
__GET__```/api/books/getByGenre?id=1``` - Получение книги с жанром с id 1.

*Возвращается книга по примеру ниже*
```
{
    "id": 1,
    "name": "Книга 1"
    "description": "Description of Книга 1",
    "author_name": "name",
    "author_id": 1,
    "genre_name": "name",
    "genre_id": 1
}
```

### Получение всех жанров
__GET__```/api/books/getAllGenres``` - Получение жанров из бд.

*Возвращается массив жанров по примеру ниже*
```
{
    "id": 1,
    "name": "name"
}
```