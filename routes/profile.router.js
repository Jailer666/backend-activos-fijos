const express = require('express');
const passport = require('passport');
const FormularioService = require('../services/formulario.service');
const router = express.Router();
const service = new FormularioService();
router.get('/my-formularios',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const  formularios= await service.findByUser(user.sub);
      res.json(formularios);
    } catch (error) {
      next(error)
    }
  });
module.exports = router;
