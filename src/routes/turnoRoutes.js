import express from 'express';
import TurnoController from '../controllers/TurnoController.js';

const router = express.Router();

// Crear un nuevo turno
router.post('/turnos', TurnoController.createTurno);

// Obtener todos los turnos con su respectivo consultorio, paciente y médico
router.get('/turnos', TurnoController.getAllTurnos);

// Obtener un turno específico por ID con su consultorio, paciente y médico
router.get('/turnos/:id', TurnoController.getTurno);

// Actualizar un turno existente
router.put('/turnos/:id', TurnoController.updateTurno);

// Eliminar un turno por ID
router.delete('/turnos/:id', TurnoController.deleteTurno);

export default router;
