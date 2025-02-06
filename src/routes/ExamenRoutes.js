import express from "express";
import ResultadoExamenController from "../controllers/ResultadoExamenController.js";

const router = express.Router();

/**
 * @openapi
 * /rest/resultado-examen:
 *   post:
 *     summary: Crea un nuevo resultado de examen.
 *     tags: [Resultado de Examen]
 *     requestBody:
 *       description: Datos del resultado de examen a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/resultadoExamen/request'
 *     responses:
 *       '201':
 *         description: Resultado de examen creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/resultadoExamen/response'
 *       '404':
 *         description: Error del servidor al crear el resultado de examen.
 */
router.post("/rest/resultado-examen", ResultadoExamenController.createResultado);

/**
 * @openapi
 * /rest/resultados-examen:
 *   get:
 *     summary: Obtiene un listado de resultados de examen.
 *     tags: [Resultado de Examen]
 *     responses:
 *       '201':
 *         description: Listado de resultados de examen obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/resultadoExamen/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de resultados de examen.
 */
router.get("/rest/resultados-examen", ResultadoExamenController.getResultados);

/**
 * @openapi
 * /rest/resultado-examen/{secuencial}:
 *   get:
 *     summary: Obtiene un resultado de examen por secuencial.
 *     tags: [Resultado de Examen]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del resultado de examen a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Resultado de examen encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/resultadoExamen/response'
 *       '301':
 *         description: Resultado de examen no encontrado.
 *       '404':
 *         description: Error del servidor al obtener resultado de examen.
 */
router.get("/rest/resultado-examen/:secuencial", ResultadoExamenController.getByResultado);

/**
 * @openapi
 * /rest/resultado-examen/{secuencial}:
 *   put:
 *     summary: Actualiza un resultado de examen por secuencial.
 *     tags: [Resultado de Examen]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del resultado de examen a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nuevos datos del resultado de examen.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/resultadoExamen/request'
 *     responses:
 *       '201':
 *         description: Resultado de examen actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/resultadoExamen/response'
 *       '301':
 *         description: Resultado de examen no encontrado.
 *       '404':
 *         description: Error del servidor al actualizar resultado de examen.
 */
router.put("/rest/resultado-examen/:secuencial", ResultadoExamenController.updateResultado);

/**
 * @openapi
 * /rest/resultado-examen/{secuencial}:
 *   delete:
 *     summary: Elimina un resultado de examen por secuencial.
 *     tags: [Resultado de Examen]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del resultado de examen a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Resultado de examen eliminado exitosamente.
 *       '301':
 *         description: Resultado de examen no encontrado.
 *       '404':
 *         description: Error del servidor al eliminar resultado de examen.
 */
router.delete("/rest/resultado-examen/:secuencial", ResultadoExamenController.deleteResultado);

export default router;