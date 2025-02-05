import apiResponse from '../components/apiResponse.js';
import MedicoEspecialidad from '../models/MedicoEspecialidad.js';

class MedicoEspecialidadController {
    async createMedicoEspecialidad(req, res) {
        try {
            const { cedulamedico, especialidadsecuencial } = req.body;
            const medicoEspecialidad = await MedicoEspecialidad.create({ cedulamedico, especialidadsecuencial });
            const response = new apiResponse(true, medicoEspecialidad, 201, 'La especialidad del médico se creó correctamente');
            res.status(201).json(response);
        } catch (error) {
            console.log(error);
            const response = new apiResponse(false, null, 404, 'Error al crear la especialidad del médico');
            res.status(404).json(response);
        }
    }

    async getMedicosEspecialidades(req, res) {
        try {
            const medicosEspecialidades = await MedicoEspecialidad.findAll();
            const response = new apiResponse(true, medicosEspecialidades, 200, 'Listado de especialidades de médicos');
            res.status(200).json(response);
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al recuperar el listado de especialidades de médicos');
            res.status(404).json(response);
        }
    }

    async getByMedicoEspecialidad(req, res) {
        try {
            const secuencial = req.params.secuencial;
            const medicoEspecialidad = await MedicoEspecialidad.findByPk(secuencial);
            if (medicoEspecialidad) {
                const response = new apiResponse(true, medicoEspecialidad, 200, 'Especialidad del médico encontrada');
                res.status(200).json(response);
            } else {
                const response = new apiResponse(true, null, 404, 'No existe esa especialidad de médico registrada');
                res.status(404).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al tratar de recuperar la especialidad del médico');
            res.status(404).json(response);
        }
    }

    async updateMedicoEspecialidad(req, res) {
        try {
            const secuencial = req.params.secuencial;
            const { cedulamedico, especialidadsecuencial } = req.body;
            const medicoEspecialidad = await MedicoEspecialidad.findByPk(secuencial);
            if (medicoEspecialidad) {
                await medicoEspecialidad.update({ cedulamedico, especialidadsecuencial });
                const response = new apiResponse(true, medicoEspecialidad, 200, 'Los cambios se han realizado exitosamente');
                res.status(200).json(response);
            } else {
                const response = new apiResponse(true, null, 404, 'La especialidad del médico a modificar no se encontró');
                res.status(404).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al modificar la especialidad del médico');
            res.status(404).json(response);
        }
    }

    async deleteMedicoEspecialidad(req, res) {
        try {
            const secuencial = req.params.secuencial;
            const medicoEspecialidad = await MedicoEspecialidad.findByPk(secuencial);
            if (medicoEspecialidad) {
                await medicoEspecialidad.destroy();
                const response = new apiResponse(true, medicoEspecialidad, 200, 'Especialidad del médico eliminada');
                res.status(200).json(response);
            } else {
                const response = new apiResponse(true, null, 404, 'No existe esa especialidad de médico a eliminar');
                res.status(404).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al eliminar la especialidad del médico');
            res.status(404).json(response);
        }
    }
};

export default new MedicoEspecialidadController;
