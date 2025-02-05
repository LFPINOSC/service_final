import express from "express";
import EstadoCivilController from "../controllers/estadoCivilController.js";

const router = express.Router();

/**
 * @openapi
 * /rest/estado-civil:
 *   post:
 *     summary: Crea un nuevo estado civil.
 *     tags: [Estado Civil]
 *     requestBody:
 *       description: Datos del estado civil a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/estadoCivil/request'
 *     responses:
 *       '201':
 *         description: Estado civil creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/estadoCivil/response'
 *       '404':
 *         description: Error del servidor al crear estado civil.
 */
router.post("/rest/estado-civil", EstadoCivilController.createEstadoCivil);

/**
 * @openapi
 * /rest/estados-civiles:
 *   get:
 *     summary: Obtiene un listado de estados civiles.
 *     tags: [Estado Civil]
 *     responses:
 *       '201':
 *         description: Listado de estados civiles obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/estadoCivil/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de estados civiles.
 */
router.get("/rest/estados-civiles", EstadoCivilController.getEstadosCiviles);

/**
 * @openapi
 * /rest/estado-civil/{secuencial}:
 *   get:
 *     summary: Obtiene un estado civil por secuencial.
 *     tags: [Estado Civil]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del estado civil a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Estado civil encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/estadoCivil/response'
 *       '301':
 *         description: Estado civil no encontrado.
 *       '404':
 *         description: Error del servidor al obtener estado civil.
 */
router.get("/rest/estado-civil/:secuencial", EstadoCivilController.getByEstadoCivil);

/**
 * @openapi
 * /rest/estado-civil/{secuencial}:
 *   put:
 *     summary: Actualiza un estado civil por secuencial.
 *     tags: [Estado Civil]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del estado civil a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nuevos datos del estado civil.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/estadoCivil/request'
 *     responses:
 *       '201':
 *         description: Estado civil actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/estadoCivil/response'
 *       '301':
 *         description: Estado civil no encontrado.
 *       '404':
 *         description: Error del servidor al actualizar estado civil.
 */
router.put("/rest/estado-civil/:secuencial", EstadoCivilController.updateEstadoCivil);

/**
 * @openapi
 * /rest/estado-civil/{secuencial}:
 *   delete:
 *     summary: Elimina un estado civil por secuencial.
 *     tags: [Estado Civil]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del estado civil a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Estado civil eliminado exitosamente.
 *       '301':
 *         description: Estado civil no encontrado.
 *       '404':
 *         description: Error del servidor al eliminar estado civil.
 */
router.delete("/rest/estado-civil/:secuencial", EstadoCivilController.deleteEstadoCivil);

export default router;
