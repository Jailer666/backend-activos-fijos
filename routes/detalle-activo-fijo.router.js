const express=require('express');
const DetalleActivoFijoService = require('../services/detalle-activo-fijo.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getDetalleActivoFijoSchema,createDetalleActivoFijoSchema,updateDetalleActivoFijoSchema } = require('../schemas/detalle-activo-fijo.schema');

const router = express.Router();
const service = new DetalleActivoFijoService();

router.get('/',async (req,res,next)=>{
  try{
    const detalleActivoFijos = await service.find(req.query);
    res.json(detalleActivoFijos);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getDetalleActivoFijoSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const detalleActivoFijo=await service.findOne(id);
    res.json(detalleActivoFijo);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createDetalleActivoFijoSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newDetalleActivoFijo = await service.create(body);
    res.status(201).json(newDetalleActivoFijo);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getDetalleActivoFijoSchema, 'params'),
  validatorHandler(updateDetalleActivoFijoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const detalleActivoFijo = await service.update(id, body);
      res.json(detalleActivoFijo);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getDetalleActivoFijoSchema, 'params'),
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
