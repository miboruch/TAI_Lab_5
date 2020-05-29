import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import routes from './REST/routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from './config';
import path from 'path';

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useCreateIndex: true }, error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected');
  }
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.error('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Server is running'));
