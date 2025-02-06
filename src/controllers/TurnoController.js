import Turno from '../models/Turno.js';
import apiResponse from '../components/apiResponse.js';

class TurnoController {
 async createTurno(req, res) {
   try {
     const turno = await Turno.create(req.body);
     res.status(201).json(new apiResponse(true, turno, 201, 'Turno creado exitosamente'));
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, error.message));
   }
 }

 async getTurno(req, res) {
   try {
     const turno = await Turno.findByPk(req.params.id);
     if (turno) {
       res.json(new apiResponse(true, turno, 200, 'Turno encontrado'));
     } else {
       res.status(404).json(new apiResponse(false, null, 404, 'Turno no encontrado'));
     }
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, 'Error del servidor'));
   }
 }

 async getAllTurnos(req, res) {
   try {
     const turnos = await Turno.findAll({ where: { estaActivo: true }});
     res.json(new apiResponse(true, turnos, 200, 'Turnos obtenidos'));
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, 'Error al obtener turnos'));
   }
 }

 async updateTurno(req, res) {
   try {
     const turno = await Turno.findByPk(req.params.id);
     if (turno) {
       await turno.update(req.body);
       res.json(new apiResponse(true, turno, 200, 'Turno actualizado'));
     } else {
       res.status(404).json(new apiResponse(false, null, 404, 'Turno no encontrado'));
     }
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, 'Error al actualizar'));
   }
 }

 async deleteTurno(req, res) {
   try {
     const turno = await Turno.findByPk(req.params.id);
     if (turno) {
       await turno.destroy();
       res.status(204).json(new apiResponse(true, null, 204, 'Turno eliminado'));
     } else {
       res.status(404).json(new apiResponse(false, null, 404, 'Turno no encontrado')); 
     }
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, 'Error al eliminar'));
   }
 }
}

export default new TurnoController();