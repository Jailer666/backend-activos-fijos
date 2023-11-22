const express=require('express');
const StateContratoService = require('./../services/state-contrato.service');

const validatorHandler = require('./../middlewares/validator.handler');
const { updateStateContratoSchema, createStateContratoSchema, getStateContratoSchema } = require('./../schemas/state-contrato.schema');

const router = express.Router();
const service = new StateContratoService();

router.get('/',async (req,res,next)=>{
  try{
    const stateContratos = await service.find();
    res.json(stateContratos);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getStateContratoSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const stateContrato=await service.findOne(id);
    res.json(stateContrato);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createStateContratoSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newStateContrato = await service.create(body);
    res.status(201).json(newStateContrato);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getStateContratoSchema, 'params'),
  validatorHandler(updateStateContratoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const stateContrato = await service.update(id, body);
      res.json(stateContrato);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getStateContratoSchema, 'params'),
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
