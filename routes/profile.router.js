const express = require('express');
const passport = require('passport');
const ActivoFijoService = require('../services/activo-fijo.service');
const router = express.Router();
const service = new ActivoFijoService();
router.get('/my-activos-fijos',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const  activosFijos= await service.findByUser(user.sub);
      res.json(activosFijos);
    } catch (error) {
      next(error)
    }
  });
module.exports = router;
