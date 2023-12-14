const express=require('express');
const DetallePerdidaService = require('../services/detalle-perdida.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getDetallePerdidaSchema,createDetallePerdidaSchema,updateDetallePerdidaSchema } = require('../schemas/detalle-perdida.schema');

const router = express.Router();
const service = new DetallePerdidaService();

router.get('/',validatorHandler('query'),async (req,res,next)=>{
  try{
    const DetallePerdida = await service.find(req.query);
    res.json(DetallePerdida);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getDetallePerdidaSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const DetallePerdida=await service.findOne(id);
    res.json(ActivoFijo);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createDetallePerdidaSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newDetallePerdida = await service.create(body);
    res.status(201).json(newDetallePerdida);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getDetallePerdidaSchema, 'params'),
  validatorHandler(updateDetallePerdidaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const DetallePerdida = await service.update(id, body);
      res.json(DetallePerdida);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getDetallePerdidaSchema, 'params'),
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
