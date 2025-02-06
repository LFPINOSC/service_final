import { Receta } from "../models/recetas.js";
import { RecetaMedicamentos } from "../models/recetaMedicamentos.js";
import { Medicamento } from "../models/medicamento.js";

export const recetaController = {
  async getAll(req, res) {
    try {
      const recetas = await Receta.findAll({
        where: { estaActivo: true },
        include: [{
          model: Medicamento,
          through: {
            model: RecetaMedicamentos,
            attributes: ['cantidad', 'indicaciones', 'dosis']
          }
        }]
      });
      res.json(recetas);
    } catch (error) {
      res.status(500).json({ 
        message: error.message,
        error: "Error al obtener las recetas"
      });
    }
  },

  async getOne(req, res) {
    try {
      const { secuencial } = req.params;
      const receta = await Receta.findOne({
        where: { 
          secuencial,
          estaActivo: true 
        },
        include: [{
          model: Medicamento,
          through: {
            model: RecetaMedicamentos,
            attributes: ['cantidad', 'indicaciones', 'dosis']
          }
        }]
      });

      if (!receta) {
        return res.status(404).json({ message: "Receta no encontrada" });
      }

      res.json(receta);
    } catch (error) {
      res.status(500).json({ 
        message: error.message,
        error: "Error al obtener la receta" 
      });
    }
  },

  async create(req, res) {
    try {
      const { medicamentos, ...recetaData } = req.body;
      const receta = await Receta.create(recetaData);

      if (medicamentos?.length > 0) {
        const recetaMedicamentosData = medicamentos.map(med => ({
          secuencialReceta: receta.secuencial,
          secuencialMedicamento: med.secuencial,
          cantidad: med.cantidad,
          indicaciones: med.indicaciones,
          dosis: med.dosis,
          estaActivo: true
        }));

        await RecetaMedicamentos.bulkCreate(recetaMedicamentosData);
      }

      const recetaCompleta = await Receta.findOne({
        where: { secuencial: receta.secuencial },
        include: [{
          model: Medicamento,
          through: {
            model: RecetaMedicamentos,
            attributes: ['cantidad', 'indicaciones', 'dosis']
          }
        }]
      });

      res.status(201).json(recetaCompleta);
    } catch (error) {
      res.status(400).json({ 
        message: error.message,
        error: "Error al crear la receta"
      });
    }
  },

  async update(req, res) {
    try {
      const { secuencial } = req.params;
      const { medicamentos, ...recetaData } = req.body;

      const receta = await Receta.findOne({
        where: { secuencial, estaActivo: true }
      });

      if (!receta) {
        return res.status(404).json({ message: "Receta no encontrada" });
      }

      await receta.update(recetaData);

      if (medicamentos?.length > 0) {
        await RecetaMedicamentos.update(
          { estaActivo: false },
          { where: { secuencialReceta: secuencial } }
        );

        const recetaMedicamentosData = medicamentos.map(med => ({
          secuencialReceta: secuencial,
          secuencialMedicamento: med.secuencial,
          cantidad: med.cantidad,
          indicaciones: med.indicaciones,
          dosis: med.dosis,
          estaActivo: true
        }));

        await RecetaMedicamentos.bulkCreate(recetaMedicamentosData);
      }

      const recetaActualizada = await Receta.findOne({
        where: { secuencial },
        include: [{
          model: Medicamento,
          through: {
            model: RecetaMedicamentos,
            attributes: ['cantidad', 'indicaciones', 'dosis']
          }
        }]
      });

      res.json(recetaActualizada);
    } catch (error) {
      res.status(400).json({ 
        message: error.message,
        error: "Error al actualizar la receta"
      });
    }
  },

  async delete(req, res) {
    try {
      const { secuencial } = req.params;
      const receta = await Receta.findOne({
        where: { secuencial, estaActivo: true }
      });

      if (!receta) {
        return res.status(404).json({ message: "Receta no encontrada" });
      }

      await receta.update({ estaActivo: false });
      
      // Desactivar registros relacionados en RecetaMedicamentos
      await RecetaMedicamentos.update(
        { estaActivo: false },
        { where: { secuencialReceta: secuencial } }
      );

      res.json({ message: "Receta eliminada correctamente" });
    } catch (error) {
      res.status(500).json({ 
        message: error.message,
        error: "Error al eliminar la receta"
      });
    }
  }
};