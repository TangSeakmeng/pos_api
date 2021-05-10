const express = require('express');
const router = new express.Router();

router.get('/', (req: any, res: any) => {
  try {
    const string = 'hello world';
    res.status(201).send({ string });
  } catch (error) {
    res.status(501).send(error);
  }
});

router.post('/create', (req: any, res: any) => {
  try {
    res.status(201).send({
      firstname: 'hello',
      lastname: 'world'
    });
  } catch (error) {
    res.status(501).send(error);
  }
});

module.exports = router;