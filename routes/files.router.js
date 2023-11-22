const express=require('express');
const FileService = require('./../services/file.service');

const validatorHandler = require('./../middlewares/validator.handler');
const { updateFileSchema, createFileSchema, getFileSchema } = require('./../schemas/file.schema');

const router = express.Router();
const service = new FileService();

router.get('/',async (req,res,next)=>{
  try{
    const files = await service.find();
    res.json(files);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getFileSchema, 'params'),
async (req,res,next)=>{
  try{
    const {id} = req.params;
    const file=await service.findOne(id);
    res.json(file);
  }catch(error){
    next(error);
  }
});

router.post('/',
validatorHandler(createFileSchema, 'body'),
async (req,res,next)=>{
  try{
    const body = req.body;
    const newFile = await service.create(body);
    res.status(201).json(newFile);
  }catch(error){
    next(error);
  }
}
);

router.patch('/:id',
  validatorHandler(getFileSchema, 'params'),
  validatorHandler(updateFileSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const file = await service.update(id, body);
      res.json(file);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getFileSchema, 'params'),
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
