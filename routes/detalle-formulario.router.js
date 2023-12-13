const express=require('express');
const DetalleFormularioService = require('../services/detalle-formulario.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getDetalleFormularioSchema,createDetalleFormularioSchema,updateDetalleFormularioSchema } = require('../schemas/detalle-formulario.schema');

const router = express.Router();
const service = new DetalleFormularioService();

router.get('/',async (req,res,next)=>{
  try{
    const DetalleFormulario = await service.find(req.query);
    res.json(DetalleFormulario);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getDetalleFormularioSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const DetalleFormulario=await service.findOne(id);
    res.json(ActivoFijo);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createDetalleFormularioSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newDetalleFormulario = await service.create(body);
    res.status(201).json(newDetalleFormulario);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getDetalleFormularioSchema, 'params'),
  validatorHandler(updateDetalleFormularioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const DetalleFormulario = await service.update(id, body);
      res.json(DetalleFormulario);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getDetalleFormularioSchema, 'params'),
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
