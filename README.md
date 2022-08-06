# Что тут есть?
Авторизация с мок-сервером, редактируемый список контактов и возможность их добавлять.
Контакты не сохраняются между сессиями, но зарегистрированный пользователь находится на вашей локальной ДБ [users.json](https://github.com/QuebecNova/Takeoff_Staff/blob/master/server/users.json)

# Настройка

### Сначала склонируйте проект:

```bash
git clone https://github.com/QuebecNova/Takeoff_Staff
```

### Настройте клиент:

1. Из корневой директории проекта установите зависимости:

```bash
npm i
```

2. Запустите клиент на порту 3000:

```bash
npm start
```

### Далее вам нужно настроить сервер:

1. Из корневой директории проекта откройте папку 'server':

```bash
cd server
```

2. Установите зависимости:

```bash
npm i
```

3. Запустите сервер на порту 8000 (поменяйте в [server.js](https://github.com/QuebecNova/Takeoff_Staff/blob/master/server/server.js), если он занят)

```bash
npm run start-auth
```

## Готово. Удачного пользования! 
Приложение доступно в браузере по ссылке: [localhost:3000](http://localhost:3000/#/login)
