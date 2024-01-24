import express from 'express';
import morgan from 'morgan';
import paymentsRoutes from './routes/payment.routes.js';
import { PORT } from './config.js'

//Inicializar
const app = express();

app.use(morgan('dev'))

app.use(paymentsRoutes);

app.listen(PORT);
console.log('Server on port ', PORT);