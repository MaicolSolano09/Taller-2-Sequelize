const express=require('express');
let usuarioController=require('../controllers/usuariosControllers');

let router=express.Router();
router.get('/usuarios',usuarioController.obtenerUsuarios);
router.get('/usuarios/:id',usuarioController.obtenerUsuariosId);
router.post('/usuarios',usuarioController.registrarUsuarios);
router.put('/usuarios/:id',usuarioController.actualizarUsuarios);
router.delete('/usuarios/:id',usuarioController.eliminarUsuarios);




module.exports=router;