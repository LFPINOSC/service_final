import express from 'express';
const router = express.Router();
import validateJSONMiddleware from '../config/validateJSONMiddleware.js';
import facturaController from '../controllers/FacturaController.js';

/**
* @swagger
* /api/facturas/crear:
*   post:
*     tags:
*       - Facturas
*     summary: Crear nueva factura
*     description: Crea una nueva factura con los datos proporcionados
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               fecha:
*                 type: string
*                 format: date
*               total:
*                 type: number
*               cedulaPersona:
*                 type: string
*               cedulaMedico:
*                 type: string
*               secuencialTurno:
*                 type: integer
*               estaActivo:
*                 type: boolean
*     responses:
*       '201':
*         description: Factura creada exitosamente
*       '400':
*         description: Error en datos enviados
*/
router.post('/api/facturas/crear', validateJSONMiddleware, facturaController.createFactura);

/**
* @swagger
* /api/facturas/listar:
*   get:
*     tags:
*       - Facturas  
*     summary: Obtener todas las facturas
*     description: Retorna lista de todas las facturas
*     responses:
*       '200':
*         description: Lista de facturas obtenida exitosamente
*       '500':
*         description: Error del servidor
*/
router.get('/api/facturas/listar', facturaController.getAllFacturas);

/**
* @swagger
* /api/facturas/buscar/{id}:
*   get:
*     tags:
*       - Facturas
*     summary: Buscar factura por ID
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: ID de la factura
*         schema:
*           type: integer
*     responses:
*       '200':
*         description: Factura encontrada
*       '401':
*         description: Factura no encontrada
*/
router.get('/api/facturas/buscar/:id', facturaController.getFactura);

/**
* @swagger
* /api/facturas/actualizar/{id}:
*   put:
*     tags:
*       - Facturas
*     summary: Actualizar factura
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: ID de la factura a actualizar
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               fecha:
*                 type: string
*                 format: date
*               total:
*                 type: number
*               cedulaPersona:
*                 type: string
*               cedulaMedico:
*                 type: string
*               secuencialTurno:
*                 type: integer
*               estaActivo:
*                 type: boolean
*     responses:
*       '200':
*         description: Factura actualizada exitosamente
*       '401':
*         description: Factura no encontrada
*/
router.put('/api/facturas/actualizar/:id', validateJSONMiddleware, facturaController.updateFactura);

/**
* @swagger
* /api/facturas/eliminar/{id}:
*   delete:
*     tags:
*       - Facturas
*     summary: Eliminar factura
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: ID de la factura a eliminar
*     responses:
*       '204':
*         description: Factura eliminada exitosamente
*       '401':
*         description: Factura no encontrada
*/
router.delete('/api/facturas/eliminar/:id', facturaController.deleteFactura);

/**
* @swagger
* /api/facturas/persona/{cedulaPersona}:
*   get:
*     tags:
*       - Facturas
*     summary: Obtener facturas por cédula de persona
*     parameters:
*       - name: cedulaPersona
*         in: path
*         required: true
*         description: Cédula de la persona
*     responses:
*       '200':
*         description: Facturas encontradas
*       '500':
*         description: Error del servidor
*/
router.get('/api/facturas/persona/:cedulaPersona', facturaController.getFacturasByPersona);

/**
* @swagger
* /api/facturas/medico/{cedulaMedico}:
*   get:
*     tags:
*       - Facturas
*     summary: Obtener facturas por cédula de médico
*     parameters:
*       - name: cedulaMedico
*         in: path
*         required: true
*         description: Cédula del médico
*     responses:
*       '200':
*         description: Facturas encontradas
*       '500':
*         description: Error del servidor
*/
router.get('/api/facturas/medico/:cedulaMedico', facturaController.getFacturasByMedico);

/**
* @swagger
* /api/facturas/turno/{secuencialTurno}:
*   get:
*     tags:
*       - Facturas
*     summary: Obtener facturas por secuencial de turno
*     parameters:
*       - name: secuencialTurno
*         in: path
*         required: true
*         description: ID del turno
*     responses:
*       '200':
*         description: Facturas encontradas
*       '500':
*         description: Error del servidor
*/
router.get('/api/facturas/turno/:secuencialTurno', facturaController.getFacturasByTurno);

/**
* @swagger
* /api/facturas/activas:
*   get:
*     tags:
*       - Facturas
*     summary: Obtener facturas activas
*     description: Retorna todas las facturas con estado activo
*     responses:
*       '200':
*         description: Facturas activas encontradas
*       '500':
*         description: Error del servidor
*/
router.get('/api/facturas/activas', facturaController.getFacturasActivas);

export default router;