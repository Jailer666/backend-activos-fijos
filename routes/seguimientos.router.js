const express=require('express');
const SeguimientoService = require('./../services/seguimiento.service');

const validatorHandler = require('./../middlewares/validator.handler');
const { getSeguimientoSchema,createSeguimientoSchema,addItemSchema } = require('./../schemas/seguimiento.schema');

const router = express.Router();
const service = new SeguimientoService();

router.get('/',async (req,res,next)=>{
  try{
    const seguimientos = await service.find();
    res.json(seguimientos);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getSeguimientoSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const seguimiento=await service.findOne(id);
    res.json(seguimiento);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createSeguimientoSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newSeguimiento = await service.create(body);
    res.status(201).json(newSeguimiento);
  }catch(error){
    next(error);
  }
}
);

router.post('/add-item',
validatorHandler(addItemSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newItem = await service.addItem(body);
    res.status(201).json(newItem);
  }catch(error){
    next(error);
  }
}
);

// router.patch('/:id',
//   validatorHandler(getSeguimientoSchema, 'params'),
//   validatorHandler(updateSeguimientoSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const seguimiento = await service.update(id, body);
//       res.json(seguimiento);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.delete('/:id',
//   validatorHandler(getSeguimientoSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       await service.delete(id);
//       res.status(201).json({id});
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;
