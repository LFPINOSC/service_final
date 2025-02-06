import { RecetaMedicamentos } from "../models/recetaMedicamentos.js";
import { Medicamento } from "../models/Medicamentos.js";
import { Receta } from "../models/Receta.js";

class RecetaMedicamentoController {
  static async getAll(req, res) {
    try {
      const recetaMedicamentos = await RecetaMedicamentos.findAll({
        where: { estaActivo: true },
        include: [
          { model: Medicamento },
          { model: Receta }
        ]
      });
      res.json(recetaMedicamentos);
    } catch (error) {
      res.status(500).json({ 
        message: error.message,
        error: "Error al obtener las recetas medicamentos" 
      });
    }
  }

  static async getOne(req, res) {
    try {
      const { secuencial } = req.params;
      const recetaMedicamento = await RecetaMedicamentos.findOne({
        where: { secuencial, estaActivo: true },
        include: [
          { model: Medicamento },
          { model: Receta }
        ]
      });

      if (!recetaMedicamento) {
        return res.status(404).json({ message: "Receta medicamento no encontrada" });
      }

      res.json(recetaMedicamento);
    } catch (error) {
      res.status(500).json({ 
        message: error.message,
        error: "Error al obtener la receta medicamento" 
      });
    }
  }

  static async create(req, res) {
    try {
      const recetaMedicamento = await RecetaMedicamentos.create({
        ...req.body,
        estaActivo: true
      });

      const recetaMedicamentoCompleta = await RecetaMedicamentos.findOne({
        where: { secuencial: recetaMedicamento.secuencial },
        include: [
          { model: Medicamento },
          { model: Receta }
        ]
      });

      res.status(201).json(recetaMedicamentoCompleta);
    } catch (error) {
      res.status(400).json({ 
        message: error.message,
        error: "Error al crear la receta medicamento" 
      });
    }
  }

  static async update(req, res) {
    try {
      const { secuencial } = req.params;
      const recetaMedicamento = await RecetaMedicamentos.findOne({
        where: { secuencial, estaActivo: true }
      });

      if (!recetaMedicamento) {
        return res.status(404).json({ message: "Receta medicamento no encontrada" });
      }

      await recetaMedicamento.update(req.body);

      const recetaMedicamentoActualizada = await RecetaMedicamentos.findOne({
        where: { secuencial },
        include: [
          { model: Medicamento },
          { model: Receta }
        ]
      });

      res.json(recetaMedicamentoActualizada);
    } catch (error) {
      res.status(400).json({ 
        message: error.message,
        error: "Error al actualizar la receta medicamento" 
      });
    }
  }

  static async delete(req, res) {
    try {
      const { secuencial } = req.params;
      const recetaMedicamento = await RecetaMedicamentos.findOne({
        where: { secuencial, estaActivo: true }
      });

      if (!recetaMedicamento) {
        return res.status(404).json({ message: "Receta medicamento no encontrada" });
      }

      await recetaMedicamento.update({ estaActivo: false });

      res.json({ message: "Receta medicamento eliminada correctamente" });
    } catch (error) {
      res.status(500).json({ 
        message: error.message,
        error: "Error al eliminar la receta medicamento" 
      });
    }
  }
}

export default RecetaMedicamentoController;