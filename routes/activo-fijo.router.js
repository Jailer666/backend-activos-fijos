const express=require('express');
const ActivoFijoService = require('../services/activo-fijo.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getActivoFijoSchema,createActivoFijoSchema,updateActivoFijosSchema } = require('../schemas/activo-fijo.schema');

const router = express.Router();
const service = new ActivoFijoService();

router.get('/',async (req,res,next)=>{
  try{
    const ActivoFijos = await service.find(req.query);
    res.json(ActivoFijos);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getActivoFijoSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const ActivoFijo=await service.findOne(id);
    res.json(ActivoFijo);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createActivoFijoSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newActivoFijo = await service.create(body);
    res.status(201).json(newActivoFijo);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getActivoFijoSchema, 'params'),
  validatorHandler(updateActivoFijosSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const ActivoFijos = await service.update(id, body);
      res.json(ActivoFijos);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getActivoFijoSchema, 'params'),
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
