import apiResponse from '../components/apiResponse.js';
import Medico from '../models/Medico.js';

class MedicoController {
    async createMedico(req, res) {
        try {
            const medicoData = req.body;
            const medico = await Medico.create(medicoData);
            const response = new apiResponse(true, medico, 201, 'El médico se creó correctamente');
            res.status(201).json(response);
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al crear el médico');
            res.status(404).json(response);
        }
    }

    async getMedicos(req, res) {
        try {
            const medicos = await Medico.findAll();
            const response = new apiResponse(true, medicos, 201, 'Listado de médicos');
            res.status(201).json(response);
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al recuperar el listado de médicos');
            res.status(404).json(response);
        }
    }

    async getByMedico(req, res) {
        try {
            const medicoCedula = req.params.cedula;
            const medico = await Medico.findByPk(medicoCedula);
            if (medico) {
                const response = new apiResponse(true, medico, 201, 'Médico encontrado');
                res.status(201).json(response);
            } else {
                const response = new apiResponse(true, null, 301, 'No existe un médico con esa cédula registrada');
                res.status(301).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al tratar de recuperar el médico');
            res.status(404).json(response);
        }
    }

    async updateMedico(req, res) {
        try {
            const medicoCedula = req.params.cedula;
            const medicoData = req.body;
            const medico = await Medico.findByPk(medicoCedula);
            if (medico) {
                await medico.update(medicoData);
                const response = new apiResponse(true, medico, 201, 'Los cambios se han realizado exitosamente');
                res.status(201).json(response);
            } else {
                const response = new apiResponse(true, null, 301, 'El médico a modificar no se encontró');
                res.status(301).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al modificar el médico');
            res.status(404).json(response);
        }
    }

    async deleteMedico(req, res) {
        try {
            const medicoCedula = req.params.cedula;
            const medico = await Medico.findByPk(medicoCedula);
            if (medico) {
                await medico.destroy();
                const response = new apiResponse(true, medico, 201, 'Médico eliminado');
                res.status(201).json(response);
            } else {
                const response = new apiResponse(true, null, 301, 'No existe un médico con esa cédula para eliminar');
                res.status(301).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al eliminar el médico');
            res.status(404).json(response);
        }
    }
};

export default new MedicoController;
