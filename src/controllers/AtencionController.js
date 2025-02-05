import Atencion from '../models/Atencion.js';  
import Turno from '../models/Turno.js';  
import apiResponse from '../components/apiResponse.js';

class AtencionController {
  async createAtencion(req, res) {
    try {
      const { descripcion, observaciones, estado, secuencialTurno } = req.body;
      const turno = await Turno.findByPk(secuencialTurno);
      if (!turno) {
        return res.status(404).json(new apiResponse(false, null, 404, 'Turno no encontrado'));
      }
      const atencion = await Atencion.create({
        descripcion,
        observaciones,
        estado,
        secuencialTurno
      });

      res.status(201).json(new apiResponse(true, atencion, 201, 'Atención creada exitosamente'));
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error del servidor al crear la atención'));
    }
  }
  async getAllAtenciones(req, res) {
    try {
      const atenciones = await Atencion.findAll({
        include: [{
          model: Turno,
          as: 'turno'
        }]
      });

      res.status(200).json(new apiResponse(true, atenciones, 200, 'Atenciones obtenidas correctamente'));
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error al obtener las atenciones'));
    }
  }
  async getAtencion(req, res) {
    try {
      const atencionId = req.params.id;
      const atencion = await Atencion.findByPk(atencionId, {
        include: [{
          model: Turno,
          as: 'turno'
        }]
      });

      if (atencion) {
        res.json(new apiResponse(true, atencion, 200, 'Atención encontrada'));
      } else {
        res.status(404).json(new apiResponse(false, null, 404, 'Atención no encontrada'));
      }
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error al obtener la atención'));
    }
  }
  async updateAtencion(req, res) {
    try {
      const atencionId = req.params.id;
      const atencionData = req.body;
      const atencion = await Atencion.findByPk(atencionId);

      if (atencion) {
        await atencion.update(atencionData);
        res.json(new apiResponse(true, atencion, 200, 'Atención actualizada exitosamente'));
      } else {
        res.status(404).json(new apiResponse(false, null, 404, 'Atención no encontrada'));
      }
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error al actualizar la atención'));
    }
  }
  async deleteAtencion(req, res) {
    try {
      const atencionId = req.params.id;
      const atencion = await Atencion.findByPk(atencionId);

      if (atencion) {
        await atencion.destroy();
        res.status(204).json(new apiResponse(true, null, 204, 'Atención eliminada exitosamente'));
      } else {
        res.status(404).json(new apiResponse(false, null, 404, 'Atención no encontrada'));
      }
    } catch (error) {
      res.status(500).json(new apiResponse(false, null, 500, 'Error al eliminar la atención'));
    }
  }
}

export default new AtencionController();
