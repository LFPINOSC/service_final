import Turno from '../models/Turno.js';
import apiResponse from '../components/apiResponse.js';

class TurnoController {
    async createTurno(req, res) {
        try {
            const turnoData = req.body;
            const turno = await Turno.create(turnoData);
            const response = new apiResponse(true, turno, 201, 'El turno se creó correctamente');
            res.status(201).json(response);
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al crear el turno');
            res.status(404).json(response);
        }
    }

    async getTurnos(req, res) {
        try {
            const turnos = await Turno.findAll();
            const response = new apiResponse(true, turnos, 201, 'Listado de turnos');
            res.status(201).json(response);
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al recuperar el listado de turnos');
            res.status(404).json(response);
        }
    }

    async getByTurno(req, res) {
        try {
            const turnoSecuencial = req.params.secuencial;
            const turno = await Turno.findByPk(turnoSecuencial);
            if (turno) {
                const response = new apiResponse(true, turno, 201, 'Turno encontrado');
                res.status(201).json(response);
            } else {
                const response = new apiResponse(true, null, 301, 'No existe un turno con ese secuencial registrado');
                res.status(301).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al tratar de recuperar el turno');
            res.status(404).json(response);
        }
    }

    async updateTurno(req, res) {
        try {
            const turnoSecuencial = req.params.secuencial;
            const turnoData = req.body;
            const turno = await Turno.findByPk(turnoSecuencial);
            if (turno) {
                await turno.update(turnoData);
                const response = new apiResponse(true, turno, 201, 'Los cambios se han realizado exitosamente');
                res.status(201).json(response);
            } else {
                const response = new apiResponse(true, null, 301, 'El turno a modificar no se encontró');
                res.status(301).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al modificar el turno');
            res.status(404).json(response);
        }
    }

    async deleteTurno(req, res) {
        try {
            const turnoSecuencial = req.params.secuencial;
            const turno = await Turno.findByPk(turnoSecuencial);
            if (turno) {
                await turno.destroy();
                const response = new apiResponse(true, turno, 201, 'Turno eliminado');
                res.status(201).json(response);
            } else {
                const response = new apiResponse(true, null, 301, 'No existe ese turno a eliminar');
                res.status(301).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al eliminar el turno');
            res.status(404).json(response);
        }
    }
}

export default new TurnoController;
