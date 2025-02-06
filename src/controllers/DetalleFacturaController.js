import DetalleFactura from '../models/DetalleFactura.js';
import apiResponse from '../components/apiResponse.js';

class DetalleFacturaController {
 async createDetalleFactura(req, res) {
   try {
     const detalle = await DetalleFactura.create(req.body);
     const response = new apiResponse(true, detalle, 201, 'Detalle creado exitosamente');
     res.status(201).json(response);
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, error.message));
   }
 }

 async getAllDetalles(req, res) {
   try {
     const detalles = await DetalleFactura.findAll();
     res.status(200).json(new apiResponse(true, detalles, 200, 'Detalles obtenidos'));
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, 'Error al obtener detalles'));
   }
 }

 async getDetalleFactura(req, res) {
   try {
     const detalle = await DetalleFactura.findByPk(req.params.id);
     if (detalle) {
       res.json(new apiResponse(true, detalle, 200, 'Detalle encontrado'));
     } else {
       res.status(404).json(new apiResponse(false, null, 404, 'Detalle no encontrado'));
     }
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, 'Error del servidor'));
   }
 }

 async updateDetalleFactura(req, res) {
   try {
     const detalle = await DetalleFactura.findByPk(req.params.id);
     if (detalle) {
       await detalle.update(req.body);
       res.json(new apiResponse(true, detalle, 200, 'Detalle actualizado exitosamente'));
     } else {
       res.status(404).json(new apiResponse(false, null, 404, 'Detalle no encontrado'));
     }
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, 'Error al actualizar'));
   }
 }

 async deleteDetalleFactura(req, res) {
   try {
     const detalle = await DetalleFactura.findByPk(req.params.id);
     if (detalle) {
       await detalle.destroy();
       res.status(204).json(new apiResponse(true, null, 204, 'Detalle eliminado'));
     } else {
       res.status(404).json(new apiResponse(false, null, 404, 'Detalle no encontrado'));
     }
   } catch (error) {
     res.status(500).json(new apiResponse(false, null, 500, 'Error al eliminar'));
   }
 }
}

export default new DetalleFacturaController();