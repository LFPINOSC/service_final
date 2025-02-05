import Atencion from '../models/Atencion.js';
import apiResponse from '../components/apiResponse.js';

class AtencionController {
    async createAtencion(req, res) {
        try {
            const atencionData = req.body;
            const atencion = await Atencion.create(atencionData);
            const response = new apiResponse(true, atencion, 201, 'La atención se creó correctamente');
            res.status(201).json(response);
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al crear la atención');
            res.status(404).json(response);
        }
    }

    async getAtenciones(req, res) {
        try {
            const atenciones = await Atencion.findAll();
            const response = new apiResponse(true, atenciones, 201, 'Listado de atenciones');
            res.status(201).json(response);
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al recuperar el listado de atenciones');
            res.status(404).json(response);
        }
    }

    async getByAtencion(req, res) {
        try {
            const atencionSecuencial = req.params.secuencial;
            const atencion = await Atencion.findByPk(atencionSecuencial);
            if (atencion) {
                const response = new apiResponse(true, atencion, 201, 'Atención encontrada');
                res.status(201).json(response);
            } else {
                const response = new apiResponse(true, null, 301, 'No existe una atención con ese secuencial registrado');
                res.status(301).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al tratar de recuperar la atención');
            res.status(404).json(response);
        }
    }

    async updateAtencion(req, res) {
        try {
            const atencionSecuencial = req.params.secuencial;
            const atencionData = req.body;
            const atencion = await Atencion.findByPk(atencionSecuencial);
            if (atencion) {
                await atencion.update(atencionData);
                const response = new apiResponse(true, atencion, 201, 'Los cambios se han realizado exitosamente');
                res.status(201).json(response);
            } else {
                const response = new apiResponse(true, null, 301, 'La atención a modificar no se encontró');
                res.status(301).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al modificar la atención');
            res.status(404).json(response);
        }
    }

    async deleteAtencion(req, res) {
        try {
            const atencionSecuencial = req.params.secuencial;
            const atencion = await Atencion.findByPk(atencionSecuencial);
            if (atencion) {
                await atencion.destroy();
                const response = new apiResponse(true, atencion, 201, 'Atención eliminada');
                res.status(201).json(response);
            } else {
                const response = new apiResponse(true, null, 301, 'No existe esa atención a eliminar');
                res.status(301).json(response);
            }
        } catch (error) {
            const response = new apiResponse(false, null, 404, 'Error al eliminar la atención');
            res.status(404).json(response);
        }
    }
}

export default new AtencionController;
