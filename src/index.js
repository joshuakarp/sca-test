import express from 'express';
import { HoustonRoutes } from './routes/houstonRoutes.js';
const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const houstonRoutes = new HoustonRoutes();
houstonRoutes.routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})