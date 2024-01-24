import express from 'express';
import paymentsRoutes from './routes/payments.routes.js';

//Inicializar
const app = express();

app.use(paymentsRoutes);

app.listen(3000);
console.log('Server on port ', 3000);