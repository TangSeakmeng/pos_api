const productExpress = require('express');
const productRouter = new productExpress.Router();

productRouter.get('', (req: any, res: any) => {
  try {
    const arrProduct = [
      {
        id: 1,
        name: 'product 1'
      },
      {
        id: 2,
        name: 'product 2'
      }
    ];
    res.status(202).send(arrProduct);
  } catch (error) {
    res.status(501).send(error);
  }
});

productRouter.post('/create', (req: any, res: any) => {
  try {
    const { id, name } = req.body;
    res.status(200).send(req.body);
  } catch (error) {
    res.status(501).send(error);
  }
});

module.exports = productRouter;
