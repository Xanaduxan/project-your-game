const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const morgan = require('morgan');
const cors = require('cors');
const sessionMiddleware = require('./middleware/session');
const routesRouter = require('./Routes/routes');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(expressSession(sessionConfig));
app.use(sessionMiddleware);
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;
app.use(cors({
  origin: ['http://localhost:4000', 'http://localhost:3000'],
  optionsSuccessStatus: 200,
  credentials: true,
}));
app.use('/', routesRouter);

app.listen(PORT, () => { console.log('я проснулся'); });