import Tratamiento from '../models/Tratamiento.js';

class TratamientoController {
  async getTratamientos(req, res) {
    try {
      const tratamientos = await Tratamiento.findAll({
        where: { estaActivo: 1 }
      });
      res.json(tratamientos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTratamientoById(req, res) {
    try {
      const tratamiento = await Tratamiento.findByPk(req.params.id);
      if (!tratamiento) {
        return res.status(404).json({ message: 'Tratamiento no encontrado' });
      }
      res.json(tratamiento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTratamientosByAtencion(req, res) {
    try {
      const tratamientos = await Tratamiento.findAll({
        where: {
          secuencialAtencion: req.params.atencionId,
          estaActivo: 1
        }
      });
      res.json(tratamientos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createTratamiento(req, res) {
    try {
      const tratamiento = await Tratamiento.create(req.body);
      res.status(201).json(tratamiento);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateTratamiento(req, res) {
    try {
      const tratamiento = await Tratamiento.findByPk(req.params.id);
      if (!tratamiento) {
        return res.status(404).json({ message: 'Tratamiento no encontrado' });
      }
      await tratamiento.update(req.body);
      res.json(tratamiento);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteTratamiento(req, res) {
    try {
      const tratamiento = await Tratamiento.findByPk(req.params.id);
      if (!tratamiento) {
        return res.status(404).json({ message: 'Tratamiento no encontrado' });
      }
      await tratamiento.update({ estaActivo: 0 });
      res.json({ message: 'Tratamiento eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default TratamientoController;