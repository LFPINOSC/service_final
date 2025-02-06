import express from 'express';
const router = express.Router();
import validateJSONMiddleware from '../config/validateJSONMiddleware.js';
import detalleFacturaController from '../controllers/DetalleFacturaController.js';

/**
* @swagger
* /api/detalles/crear:
*   post:
*     tags:
*       - DetalleFactura
*     summary: Crear nuevo detalle de factura
*     description: Crea un nuevo detalle de factura con los datos proporcionados
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               secuencialFactura:
*                 type: integer
*               descripcion:
*                 type: string
*               cantidad:
*                 type: integer
*               precioUnitario:
*                 type: number
*               subtotal:
*                 type: number
*     responses:
*       '201':
*         description: Detalle creado exitosamente
*       '400':
*         description: Error en datos enviados
*/
router.post('/api/detalles/crear', validateJSONMiddleware, detalleFacturaController.createDetalleFactura);

/**
* @swagger
* /api/detalles/listar:
*   get:
*     tags:
*       - DetalleFactura
*     summary: Obtener todos los detalles
*     description: Retorna lista de todos los detalles de factura
*     responses:
*       '200':
*         description: Lista de detalles obtenida exitosamente
*       '500':
*         description: Error del servidor
*/
router.get('/api/detalles/listar', detalleFacturaController.getAllDetalles);

/**
* @swagger
* /api/detalles/buscar/{id}:
*   get:
*     tags:
*       - DetalleFactura
*     summary: Buscar detalle por ID
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: ID del detalle
*         schema:
*           type: integer
*     responses:
*       '200':
*         description: Detalle encontrado
*       '401':
*         description: Detalle no encontrado
*/
router.get('/api/detalles/buscar/:id', detalleFacturaController.getDetalleFactura);

/**
* @swagger
* /api/detalles/factura/{secuencialFactura}:
*   get:
*     tags:
*       - DetalleFactura
*     summary: Obtener detalles por factura
*     parameters:
*       - name: secuencialFactura
*         in: path
*         required: true
*         description: ID de la factura
*         schema:
*           type: integer
*     responses:
*       '200':
*         description: Detalles encontrados
*       '500':
*         description: Error del servidor
*/
router.get('/api/detalles/factura/:secuencialFactura', detalleFacturaController.getDetallesByFactura);

/**
* @swagger
* /api/detalles/actualizar/{id}:
*   put:
*     tags:
*       - DetalleFactura
*     summary: Actualizar detalle
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: ID del detalle a actualizar
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               secuencialFactura:
*                 type: integer
*               descripcion:
*                 type: string
*               cantidad:
*                 type: integer
*               precioUnitario:
*                 type: number
*               subtotal:
*                 type: number
*     responses:
*       '200':
*         description: Detalle actualizado exitosamente
*       '401':
*         description: Detalle no encontrado
*/
router.put('/api/detalles/actualizar/:id', validateJSONMiddleware, detalleFacturaController.updateDetalleFactura);

/**
* @swagger
* /api/detalles/eliminar/{id}:
*   delete:
*     tags:
*       - DetalleFactura
*     summary: Eliminar detalle
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: ID del detalle a eliminar
*     responses:
*       '204':
*         description: Detalle eliminado exitosamente
*       '401':
*         description: Detalle no encontrado
*/
router.delete('/api/detalles/eliminar/:id', detalleFacturaController.deleteDetalleFactura);

export default router;