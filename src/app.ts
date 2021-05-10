// import module
import express from 'express';

// import file
const userRouter = require('./routers/userRouter.router');
const productRouter = require('./routers/productRouter.router');

// using middle
const app = express();
const port = process.env.PORT || 3000;

// using route middleware
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// server
app.listen(port, () => {
  console.log(`server is starting at port ${port}.`);
});  