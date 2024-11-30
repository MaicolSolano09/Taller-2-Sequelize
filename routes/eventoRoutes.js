const express=require('express');
let eventoController=require('../controllers/eventosControllers');

let router=express.Router();
router.get('/eventos',eventoController.obtenerEventos);
router.get('/eventos/:id',eventoController.obtenerEventosId);
router.post('/eventos',eventoController.registrarEventos);
router.put('/eventos/:id',eventoController.actualizarEventos);
router.delete('/eventos/:id',eventoController.eliminarEventos);

router.get('/eventoPopular',eventoController.EventoMasPopular);


module.exports=router;