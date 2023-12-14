const express=require('express');
const FormularioPerdidaService = require('../services/formulario-perdida.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getFormularioPerdidaSchema,createFormularioPerdidaSchema,updateFormularioPerdidaSchema } = require('../schemas/formulario-perdida.schema');

const router = express.Router();
const service = new FormularioPerdidaService();

router.get('/',validatorHandler('query'),async (req,res,next)=>{
  try{
    const formulariosPerdida = await service.find(req.query);
    res.json(formulariosPerdida);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getFormularioPerdidaSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const formularioPerdida=await service.findOne(id);
    res.json(formularioPerdida);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createFormularioPerdidaSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newFormularioPerdida = await service.create(body);
    res.status(201).json(newFormularioPerdida);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getFormularioPerdidaSchema, 'params'),
  validatorHandler(updateFormularioPerdidaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const formularioPerdida = await service.update(id, body);
      res.json(formularioPerdida);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getFormularioPerdidaSchema, 'params'),
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
