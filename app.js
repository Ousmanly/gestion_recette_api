import express from 'express';
import bodyParser from 'body-parser';
import RecipeRouter from './routes/RecipeRoute.js';
import Categoryrouter from './routes/CategoryRoute.js';
// import CategoryRouter from './routes/CategoryRoute.js'

const app = express();

app.use(bodyParser.json());

app.use('/api', RecipeRouter);
app.use('/api', Categoryrouter);
console.log('samarrchhheeee');

const port = 3005;
app.listen(port, () => {
  console.log(`Server in runing in port ${port}`);
});
