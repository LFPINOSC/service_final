import Consultorio from '../models/Consultorio.js';

export const getConsultorios = async (req, res) => {
  try {
    const consultorios = await Consultorio.findAll({
      where: { estaActivo: 1 }
    });
    res.json(consultorios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getConsultorioById = async (req, res) => {
  try {
    const consultorio = await Consultorio.findByPk(req.params.id);
    if (!consultorio) {
      return res.status(404).json({ message: 'Consultorio no encontrado' });
    }
    res.json(consultorio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createConsultorio = async (req, res) => {
  try {
    const consultorio = await Consultorio.create(req.body);
    res.status(201).json(consultorio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateConsultorio = async (req, res) => {
  try {
    const consultorio = await Consultorio.findByPk(req.params.id);
    if (!consultorio) {
      return res.status(404).json({ message: 'Consultorio no encontrado' });
    }
    await consultorio.update(req.body);
    res.json(consultorio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteConsultorio = async (req, res) => {
  try {
    const consultorio = await Consultorio.findByPk(req.params.id);
    if (!consultorio) {
      return res.status(404).json({ message: 'Consultorio no encontrado' });
    }
    await consultorio.update({ estaActivo: 0 });
    res.json({ message: 'Consultorio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};