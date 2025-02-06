import express from "express";
import MedicoEspecialidadController from "../controllers/medicoEspecialidadController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/medico-especialidad:
 *   post:
 *     summary: Asigna una especialidad a un médico.
 *     tags: [MedicoEspecialidad]
 *     requestBody:
 *       description: Datos de la asignación de especialidad al médico.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/medicoEspecialidad/request'
 *     responses:
 *       '201':
 *         description: Especialidad asignada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/medicoEspecialidad/response'
 *       '404':
 *         description: Error del servidor al asignar especialidad.
 */
router.post(
  "/rest/medico-especialidad", 
  MedicoEspecialidadController.createMedicoEspecialidad
);

/**
 * @openapi
 * /rest/medico-especialidades:
 *   get:
 *     summary: Obtiene un listado de especialidades asignadas a médicos.
 *     tags: [MedicoEspecialidad]
 *     responses:
 *       '200':
 *         description: Listado obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/medicoEspecialidad/response'
 *       '404':
 *         description: Error del servidor al obtener el listado.
 */
router.get("/rest/medico-especialidades",
  MedicoEspecialidadController.getMedicosEspecialidades
);

/**
 * @openapi
 * /rest/medico-especialidad/{secuencial}:
 *   get:
 *     summary: Obtiene la asignación de especialidad por secuencial.
 *     tags: [MedicoEspecialidad]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la asignación de especialidad.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Asignación encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/medicoEspecialidad/response'
 *       '404':
 *         description: Asignación no encontrada.
 */
router.get(
  "/rest/medico-especialidad/:secuencial",
  MedicoEspecialidadController.getByMedicoEspecialidad
);

/**
 * @openapi
 * /rest/medico-especialidad/{secuencial}:
 *   put:
 *     summary: Actualiza la asignación de especialidad por secuencial.
 *     tags: [MedicoEspecialidad]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la asignación a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nuevos datos de la asignación.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/medicoEspecialidad/request'
 *     responses:
 *       '200':
 *         description: Asignación actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/medicoEspecialidad/response'
 *       '404':
 *         description: Asignación no encontrada.
 */
router.put(
  "/rest/medico-especialidad/:secuencial", 
  MedicoEspecialidadController.updateMedicoEspecialidad
);

/**
 * @openapi
 * /rest/medico-especialidad/{secuencial}:
 *   delete:
 *     summary: Elimina una asignación de especialidad por secuencial.
 *     tags: [MedicoEspecialidad]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial de la asignación a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Asignación eliminada exitosamente.
 *       '404':
 *         description: Asignación no encontrada.
 */
router.delete(
  "/rest/medico-especialidad/:secuencial",
  MedicoEspecialidadController.deleteMedicoEspecialidad
);

export default router;
