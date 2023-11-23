const express=require('express');
const ContratoService = require('./../services/contrato.service');

const validatorHandler = require('./../middlewares/validator.handler');
const { updateContratoSchema, createContratoSchema, getContratoSchema, queryContratoSchema } = require('./../schemas/contrato.schema');

const router = express.Router();
const service = new ContratoService();

router.get('/',validatorHandler(queryContratoSchema,'query'),async (req,res,next)=>{
  try{
    const contratos = await service.find(req.query);
    res.json(contratos);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getContratoSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const contrato=await service.findOne(id);
    res.json(contrato);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createContratoSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newContrato = await service.create(body);
    res.status(201).json(newContrato);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getContratoSchema, 'params'),
  validatorHandler(updateContratoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const contrato = await service.update(id, body);
      res.json(contrato);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getContratoSchema, 'params'),
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
