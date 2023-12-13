const express=require('express');
const FormularioService = require('../services/formulario.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getFormularioSchema,createFormularioSchema,updateFormularioSchema } = require('../schemas/formulario.schema');

const router = express.Router();
const service = new FormularioService();

router.get('/',async (req,res,next)=>{
  try{
    const formularios = await service.find(req.query);
    res.json(formularios);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getFormularioSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const formulario=await service.findOne(id);
    res.json(formulario);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createFormularioSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newFormulario = await service.create(body);
    res.status(201).json(newFormulario);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getFormularioSchema, 'params'),
  validatorHandler(updateFormularioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const formulario = await service.update(id, body);
      res.json(formulario);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getFormularioSchema, 'params'),
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
