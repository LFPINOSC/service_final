import express from 'express';
import AtencionController from '../controllers/AtencionController.js';

const router = express.Router();

// Crear una nueva atención
router.post('/atenciones', AtencionController.createAtencion);

// Obtener todas las atenciones con su respectivo turno
router.get('/atenciones', AtencionController.getAllAtenciones);

// Obtener una atención específica por ID con su turno asociado
router.get('/atenciones/:id', AtencionController.getAtencion);

// Actualizar una atención existente
router.put('/atenciones/:id', AtencionController.updateAtencion);

// Eliminar una atención por ID
router.delete('/atenciones/:id', AtencionController.deleteAtencion);

export default router;
