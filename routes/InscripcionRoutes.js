const express=require('express');
let inscripcionController=require('../controllers/inscripcionesControllers');

let router=express.Router();

router.post('/inscripcion', inscripcionController.crearInscripcion);
router.get('/numInscripcionE', inscripcionController.NumInscripcionesEventos);
router.put('/cancelar/:id', inscripcionController.cancelarInscripcion)


module.exports=router;