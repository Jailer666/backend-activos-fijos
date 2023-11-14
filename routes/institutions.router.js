const express=require('express');
const InstitutionService = require('./../services/institution.service');

const validatorHandler = require('./../middlewares/validator.handler');
const { updateInstitutionSchema, createInstitutionSchema, getInstitutionSchema } = require('./../schemas/institution.schema');

const router = express.Router();
const service = new InstitutionService();

router.get('/',async (req,res,next)=>{
  try{
    const institutions = await service.find();
    res.json(institutions);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getInstitutionSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const institution=await service.findOne(id);
    res.json(institution);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createInstitutionSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newInstitution = await service.create(body);
    res.status(201).json(newInstitution);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getInstitutionSchema, 'params'),
  validatorHandler(updateInstitutionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const institution = await service.update(id, body);
      res.json(institution);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getInstitutionSchema, 'params'),
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
