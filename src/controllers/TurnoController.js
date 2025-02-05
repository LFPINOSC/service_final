import Turno from '../models/Turno.js';
import Consultorio from '../models/Consultorio.js';
import Persona from '../models/Persona.js';
import Medico from '../models/Medico.js';
import apiResponse from '../components/apiResponse.js';

class TurnoController {
  async createTurno(req, res) {
    try {
      const { fecha, hora, estado, estaActivo, cedulaPersona, cedulaMedico, secuencialConsultorio } = req.body;

      const consultorio = await Consultorio.findByPk(secuencialConsultorio);
      if (!consultorio) {
        return res.status(404).json(new apiResponse(false, null, 404, 'Consultorio no encontrado'));
      }
      const turno = await Turno.create({
        fecha,
        hora,
        estado,
        estaActivo,
        cedulaPersona,
        cedulaMedico,
        secuencialConsultorio
      });

      res.status(201).json(new apiResponse(true, turno, 201, 'Turno creado exitosamente'));
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error del servidor al crear el turno'));
    }
  }
  async getAllTurnos(req, res) {
    try {
      const turnos = await Turno.findAll({
        include: [{
          model: Consultorio,
          as: 'consultorio'
        }]
      });

      res.status(200).json(new apiResponse(true, turnos, 200, 'Turnos obtenidos correctamente'));
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error al obtener los turnos'));
    }
  }
  async getTurno(req, res) {
    try {
      const turnoId = req.params.id;
      const turno = await Turno.findByPk(turnoId, {
        include: [{
          model: Consultorio,
          as: 'consultorio'
        }]
      });

      if (turno) {
        res.json(new apiResponse(true, turno, 200, 'Turno encontrado'));
      } else {
        res.status(404).json(new apiResponse(false, null, 404, 'Turno no encontrado'));
      }
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error al obtener el turno'));
    }
  }
  async updateTurno(req, res) {
    try {
      const turnoId = req.params.id;
      const turnoData = req.body;
      const turno = await Turno.findByPk(turnoId);

      if (turno) {
        await turno.update(turnoData);
        res.json(new apiResponse(true, turno, 200, 'Turno actualizado exitosamente'));
      } else {
        res.status(404).json(new apiResponse(false, null, 404, 'Turno no encontrado'));
      }
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error al actualizar el turno'));
    }
  }

  async deleteTurno(req, res) {
    try {
      const turnoId = req.params.id;
      const turno = await Turno.findByPk(turnoId);

      if (turno) {
        await turno.destroy();
        res.status(204).json(new apiResponse(true, null, 204, 'Turno eliminado exitosamente'));
      } else {
        res.status(404).json(new apiResponse(false, null, 404, 'Turno no encontrado'));
      }
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error al eliminar el turno'));
    }
  }
}

export default new TurnoController();
