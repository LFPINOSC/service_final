import express from "express";
import OrdendeExamenController from "../controllers/OrdendeExamenController.js";

const router = express.Router();

/**
 * @openapi
 * /rest/orden-examen:
 *   post:
 *     summary: Crea una nueva orden de examen.
 *     tags: [Orden de Examen]
 *     requestBody:
 *       description: Datos de la orden de examen a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ordenExamen/request'
 *     responses:
 *       '201':
 *         description: Orden de examen creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ordenExamen/response'
 *       '404':
 *         description: Error del servidor al crear la orden de examen.
 */
router.post("/rest/orden-examen", OrdendeExamenController.createOrden);

/**
 * @openapi
 * /rest/ordenes-examen:
 *   get:
 *     summary: Obtiene un listado de órdenes de examen.
 *     tags: [Orden de Examen]
 *     responses:
 *       '201':
 *         description: Listado de órdenes de examen obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ordenExamen/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de órdenes de examen.
 */
router.get("/rest/ordenes-examen", OrdendeExamenController.getOrdenes);

/**
 * @openapi
 * /rest/orden-examen/{secuencial}:
 *   get:
 *     summary: Obtiene una orden de examen por secuencial.
 *     tags: [Orden de Examen]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la orden de examen a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Orden de examen encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ordenExamen/response'
 *       '301':
 *         description: Orden de examen no encontrada.
 *       '404':
 *         description: Error del servidor al obtener orden de examen.
 */
router.get("/rest/orden-examen/:secuencial", OrdendeExamenController.getByOrden);

/**
 * @openapi
 * /rest/orden-examen/{secuencial}:
 *   put:
 *     summary: Actualiza una orden de examen por secuencial.
 *     tags: [Orden de Examen]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la orden de examen a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nuevos datos de la orden de examen.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ordenExamen/request'
 *     responses:
 *       '201':
 *         description: Orden de examen actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ordenExamen/response'
 *       '301':
 *         description: Orden de examen no encontrada.
 *       '404':
 *         description: Error del servidor al actualizar orden de examen.
 */
router.put("/rest/orden-examen/:secuencial", OrdendeExamenController.updateOrden);

/**
 * @openapi
 * /rest/orden-examen/{secuencial}:
 *   delete:
 *     summary: Elimina una orden de examen por secuencial.
 *     tags: [Orden de Examen]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la orden de examen a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Orden de examen eliminada exitosamente.
 *       '301':
 *         description: Orden de examen no encontrada.
 *       '404':
 *         description: Error del servidor al eliminar orden de examen.
 */
router.delete("/rest/orden-examen/:secuencial", OrdendeExamenController.deleteOrden);

export default router;