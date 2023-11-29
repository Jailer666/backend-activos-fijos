const express = require('express');
const passport = require('passport');
const ContratoService = require('../services/contrato.service');
const router = express.Router();
const service = new ContratoService();
router.get('/my-contratos',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const contratos = await service.findByUser(user.sub);
      res.json(contratos);
    } catch (error) {
      next(error)
    }
  });
module.exports = router;
