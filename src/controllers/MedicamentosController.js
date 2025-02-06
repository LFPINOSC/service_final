
import { Medicamento } from '../models/Medicamentos.js'

export const medicamentoController = {
  async getAll(req, res) {
    try {
      const medicamentos = await Medicamento.findAll({
        where: { estaActivo: true }
      });
      res.json(medicamentos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const medicamento = await Medicamento.findOne({
        where: { secuencial: req.params.id, estaActivo: true }
      });
      if (!medicamento) return res.status(404).json({ message: 'Medicamento no encontrado' });
      res.json(medicamento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const medicamento = await Medicamento.create(req.body);
      res.status(201).json(medicamento);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Medicamento.update(req.body, {
        where: { secuencial: req.params.id, estaActivo: true }
      });
      if (!updated) return res.status(404).json({ message: 'Medicamento no encontrado' });
      const medicamento = await Medicamento.findByPk(req.params.id);
      res.json(medicamento);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const updated = await Medicamento.update(
        { estaActivo: false },
        { where: { secuencial: req.params.id } }
      );
      if (!updated) return res.status(404).json({ message: 'Medicamento no encontrado' });
      res.json({ message: 'Medicamento eliminado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// controllers/recetaController.js
import { Receta, Medicamento, RecetaMedicamentos } from '../models/Receta.js';

export const recetaController = {
  async getAll(req, res) {
    try {
      const recetas = await Receta.findAll({
        where: { estaActivo: true },
        include: [{
          model: Medicamento,
          through: RecetaMedicamentos
        }]
      });
      res.json(recetas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const receta = await Receta.findOne({
        where: { secuencial: req.params.id, estaActivo: true },
        include: [{
          model: Medicamento,
          through: RecetaMedicamentos
        }]
      });
      if (!receta) return res.status(404).json({ message: 'Receta no encontrada' });
      res.json(receta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const { medicamentos, ...recetaData } = req.body;
      const receta = await Receta.create(recetaData);

      if (medicamentos?.length > 0) {
        const recetaMedicamentos = medicamentos.map(med => ({
          secuencialReceta: receta.secuencial,
          secuencialMedicamento: med.secuencial,
          cantidad: med.cantidad,
          indicaciones: med.indicaciones,
          dosis: med.dosis
        }));
        await RecetaMedicamentos.bulkCreate(recetaMedicamentos);
      }

      const recetaCompleta = await Receta.findByPk(receta.secuencial, {
        include: [{
          model: Medicamento,
          through: RecetaMedicamentos
        }]
      });
      res.status(201).json(recetaCompleta);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const { medicamentos, ...recetaData } = req.body;
      const [updated] = await Receta.update(recetaData, {
        where: { secuencial: req.params.id, estaActivo: true }
      });

      if (!updated) return res.status(404).json({ message: 'Receta no encontrada' });

      if (medicamentos) {
        await RecetaMedicamentos.update(
          { estaActivo: false },
          { where: { secuencialReceta: req.params.id } }
        );

        const recetaMedicamentos = medicamentos.map(med => ({
          secuencialReceta: req.params.id,
          secuencialMedicamento: med.secuencial,
          cantidad: med.cantidad,
          indicaciones: med.indicaciones,
          dosis: med.dosis
        }));
        await RecetaMedicamentos.bulkCreate(recetaMedicamentos);
      }

      const receta = await Receta.findByPk(req.params.id, {
        include: [{
          model: Medicamento,
          through: RecetaMedicamentos
        }]
      });
      res.json(receta);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const updated = await Receta.update(
        { estaActivo: false },
        { where: { secuencial: req.params.id } }
      );
      if (!updated) return res.status(404).json({ message: 'Receta no encontrada' });
      res.json({ message: 'Receta eliminada' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};