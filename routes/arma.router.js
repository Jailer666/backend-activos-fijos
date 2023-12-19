const express=require('express');
const ArmaService = require('../services/arma.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getArmaSchema,createArmaSchema,updateArmaSchema } = require('../schemas/arma.schema');

const router = express.Router();
const service = new ArmaService();

router.get('/',async (req,res,next)=>{
  try{
    const Arma = await service.find(req.query);
    res.json(Arma);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getArmaSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const Arma=await service.findOne(id);
    res.json(Arma);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createArmaSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newArma = await service.create(body);
    res.status(201).json(newArma);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getArmaSchema, 'params'),
  validatorHandler(updateArmaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const Arma = await service.update(id, body);
      res.json(Arma);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getArmaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
