const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('', (req:any, res:any) => {
  try {
    const string = 'hello world';
    res.status(201).send({ string });
  } catch (error) {
    res.status(501).send(error);
  }
});

app.get('/products', (req: any, res: any) => {
  try {
    
  } catch (error) {
    
  }
});

app.listen(port, () => {
  console.log(`server is starting at port ${port}.`);
});  