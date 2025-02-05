import apiResponse from '../components/apiResponse.js';
import Especialidad from '../models/Especialidad.js';

class EspecialidadController {
    async createEspecialidad(req, res) {
        try {
            const { nombre, estaActivo } = req.body;
            const especialidad = await Especialidad.create({ nombre, estaActivo });
            const response = new apiResponse(true, especialidad, 201, 'La especialidad se creó correctamente');
            res.status(201).json(response);
        } catch (error) {
            console.log(error);
            const response = new apiResponse(false, null, 404, 'Error al crear la especialidad');
            res.status(404).json(response);
        }
    }

    async getEspecialidades(req, res) {
        try {
            const especialidades = await Especialidad.findAll();
            const response = new apiResponse(true, especialidades, 200, 'Listado de especialidades');
            res.status(200).json(response);
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al recuperar el listado de especialidades');
            res.status(404).json(response);
        }
    }

    async getByEspecialidad(req, res) {
        try {
            const secuencial = req.params.secuencial;
            const especialidad = await Especialidad.findByPk(secuencial);
            if (especialidad) {
                const response = new apiResponse(true, especialidad, 200, 'Especialidad encontrada');
                res.status(200).json(response);
            } else {
                const response = new apiResponse(true, null, 404, 'No existe esa especialidad registrada');
                res.status(404).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al tratar de recuperar la especialidad');
            res.status(404).json(response);
        }
    }

    async updateEspecialidad(req, res) {
        try {
            const secuencial = req.params.secuencial;
            const { nombre, estaActivo } = req.body;
            const especialidad = await Especialidad.findByPk(secuencial);
            if (especialidad) {
                await especialidad.update({ nombre, estaActivo });
                const response = new apiResponse(true, especialidad, 200, 'Los cambios se han realizado exitosamente');
                res.status(200).json(response);
            } else {
                const response = new apiResponse(true, null, 404, 'La especialidad a modificar no se encontró');
                res.status(404).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al modificar la especialidad');
            res.status(404).json(response);
        }
    }

    async deleteEspecialidad(req, res) {
        try {
            const secuencial = req.params.secuencial;
            const especialidad = await Especialidad.findByPk(secuencial);
            if (especialidad) {
                await especialidad.destroy();
                const response = new apiResponse(true, especialidad, 200, 'Especialidad eliminada');
                res.status(200).json(response);
            } else {
                const response = new apiResponse(true, null, 404, 'No existe esa especialidad a eliminar');
                res.status(404).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al eliminar la especialidad');
            res.status(404).json(response);
        }
    }
};

export default new EspecialidadController;
