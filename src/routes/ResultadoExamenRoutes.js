import express from "express";
import ExamenController from "../controllers/ExamenController.js";

const router = express.Router();

/**
 * @openapi
 * /rest/examen:
 *   post:
 *     summary: Crea un nuevo examen.
 *     tags: [Examen]
 *     requestBody:
 *       description: Datos del examen a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/examen/request'
 *     responses:
 *       '201':
 *         description: Examen creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/examen/response'
 *       '404':
 *         description: Error del servidor al crear el examen.
 */
router.post("/rest/examen", ExamenController.createExamen);

/**
 * @openapi
 * /rest/examenes:
 *   get:
 *     summary: Obtiene un listado de exámenes.
 *     tags: [Examen]
 *     responses:
 *       '201':
 *         description: Listado de exámenes obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/examen/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de exámenes.
 */
router.get("/rest/examenes", ExamenController.getExamenes);

/**
 * @openapi
 * /rest/examen/{secuencial}:
 *   get:
 *     summary: Obtiene un examen por secuencial.
 *     tags: [Examen]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del examen a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Examen encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/examen/response'
 *       '301':
 *         description: Examen no encontrado.
 *       '404':
 *         description: Error del servidor al obtener examen.
 */
router.get("/rest/examen/:secuencial", ExamenController.getByExamen);

/**
 * @openapi
 * /rest/examen/{secuencial}:
 *   put:
 *     summary: Actualiza un examen por secuencial.
 *     tags: [Examen]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del examen a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nuevos datos del examen.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/examen/request'
 *     responses:
 *       '201':
 *         description: Examen actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/examen/response'
 *       '301':
 *         description: Examen no encontrado.
 *       '404':
 *         description: Error del servidor al actualizar examen.
 */
router.put("/rest/examen/:secuencial", ExamenController.updateExamen);

/**
 * @openapi
 * /rest/examen/{secuencial}:
 *   delete:
 *     summary: Elimina un examen por secuencial.
 *     tags: [Examen]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del examen a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Examen eliminado exitosamente.
 *       '301':
 *         description: Examen no encontrado.
 *       '404':
 *         description: Error del servidor al eliminar examen.
 */
router.delete("/rest/examen/:secuencial", ExamenController.deleteExamen);

export default router;