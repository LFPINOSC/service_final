import express from "express";
import AtencionController from "../controllers/AtencionController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/atencion:
 *   post:
 *     summary: Crea una nueva atención.
 *     tags: [Atencion]
 *     requestBody:
 *       description: Datos de la atención a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/atencion/request'
 *     responses:
 *       '201':
 *         description: Atención creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/atencion/response'
 *       '404':
 *         description: Error del servidor al crear atención.
 */
router.post(
  "/rest/atencion", 
  AtencionController.createAtencion
);

/**
 * @openapi
 * /rest/atenciones:
 *   get:
 *     summary: Obtiene un listado de atenciones.
 *     tags: [Atencion]
 *     responses:
 *       '200':
 *         description: Listado de atenciones obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/atencion/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de atenciones.
 */
router.get("/rest/atenciones",
  AtencionController.getAtenciones
);

/**
 * @openapi
 * /rest/atencion/{secuencial}:
 *   get:
 *     summary: Obtiene una atención por secuencial.
 *     tags: [Atencion]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la atención a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Atención encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/atencion/response'
 *       '404':
 *         description: Atención no encontrada.
 */
router.get(
  "/rest/atencion/:secuencial",
  AtencionController.getByAtencion
);

/**
 * @openapi
 * /rest/atencion/{secuencial}:
 *   put:
 *     summary: Actualiza una atención por secuencial.
 *     tags: [Atencion]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la atención a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nuevos datos de la atención.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/atencion/request'
 *     responses:
 *       '200':
 *         description: Atención actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/atencion/response'
 *       '404':
 *         description: Atención no encontrada.
 */
router.put(
  "/rest/atencion/:secuencial", 
  AtencionController.updateAtencion
);

/**
 * @openapi
 * /rest/atencion/{secuencial}:
 *   delete:
 *     summary: Elimina una atención por secuencial.
 *     tags: [Atencion]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la atención a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Atención eliminada exitosamente.
 *       '404':
 *         description: Atención no encontrada.
 */
router.delete(
  "/rest/atencion/:secuencial",
  AtencionController.deleteAtencion
);

export default router;
