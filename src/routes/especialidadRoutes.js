import express from "express";
import EspecialidadController from "../controllers/especialidadController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/especialidad:
 *   post:
 *     summary: Crea una nueva especialidad.
 *     tags: [Especialidad]
 *     requestBody:
 *       description: Datos de la especialidad a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/especialidad/request'
 *     responses:
 *       '201':
 *         description: Especialidad creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/especialidad/response'
 *       '404':
 *         description: Error del servidor al crear especialidad.
 */
router.post(
  "/rest/especialidad", 
  EspecialidadController.createEspecialidad
);

/**
 * @openapi
 * /rest/especialidades:
 *   get:
 *     summary: Obtiene un listado de especialidades.
 *     tags: [Especialidad]
 *     responses:
 *       '200':
 *         description: Listado de especialidades obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/especialidad/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de especialidades.
 */
router.get("/rest/especialidades",
  EspecialidadController.getEspecialidades
);

/**
 * @openapi
 * /rest/especialidad/{secuencial}:
 *   get:
 *     summary: Obtiene una especialidad por secuencial.
 *     tags: [Especialidad]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la especialidad a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Especialidad encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/especialidad/response'
 *       '404':
 *         description: Especialidad no encontrada.
 */
router.get(
  "/rest/especialidad/:secuencial",
  EspecialidadController.getByEspecialidad
);

/**
 * @openapi
 * /rest/especialidad/{secuencial}:
 *   put:
 *     summary: Actualiza una especialidad por secuencial.
 *     tags: [Especialidad]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la especialidad a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nuevos datos de la especialidad.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/especialidad/request'
 *     responses:
 *       '200':
 *         description: Especialidad actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/especialidad/response'
 *       '404':
 *         description: Especialidad no encontrada.
 */
router.put(
  "/rest/especialidad/:secuencial", 
  EspecialidadController.updateEspecialidad
);

/**
 * @openapi
 * /rest/especialidad/{secuencial}:
 *   delete:
 *     summary: Elimina una especialidad por secuencial.
 *     tags: [Especialidad]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la especialidad a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Especialidad eliminada exitosamente.
 *       '404':
 *         description: Especialidad no encontrada.
 */
router.delete(
  "/rest/especialidad/:secuencial",
  EspecialidadController.deleteEspecialidad
);

export default router;
