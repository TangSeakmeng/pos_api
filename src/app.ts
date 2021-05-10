// import module
import express, { Application, Router } from 'express';

// import file
import routes from './routers/route.router';

const app: Application = express();
const port = process.env.PORT || 3000;

// using middleware
app.use(express.json());
app.use(routes);

// server
app.listen(port, () => {
  console.log(`server is starting at port ${port}.`);
});  