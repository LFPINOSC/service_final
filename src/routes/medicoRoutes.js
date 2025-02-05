import express from "express";
import MedicoController from "../controllers/medicoController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/medico:
 *   post:
 *     summary: Crea un nuevo médico.
 *     tags: [Medico]
 *     requestBody:
 *       description: Datos del médico a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/medico/request'
 *     responses:
 *       '201':
 *         description: Médico creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/medico/response'
 *       '404':
 *         description: Error del servidor al crear médico.
 */
router.post(
  "/rest/medico", 
  MedicoController.createMedico
);

/**
 * @openapi
 * /rest/medicos:
 *   get:
 *     summary: Obtiene un listado de médicos.
 *     tags: [Medico]
 *     responses:
 *       '200':
 *         description: Listado de médicos obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/medico/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de médicos.
 */
router.get("/rest/medicos",
  MedicoController.getMedicos
);

/**
 * @openapi
 * /rest/medico/cedula/{cedula}:
 *   get:
 *     summary: Obtiene un médico por cédula.
 *     tags: [Medico]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         description: Cédula del médico a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Médico encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/medico/response'
 *       '301':
 *         description: Médico no encontrado.
 *       '404':
 *         description: Error del servidor al obtener médico.
 */
router.get(
  "/rest/medico/cedula/:cedula",
  MedicoController.getByMedico
);

/**
 * @openapi
 * /rest/medico/{cedula}:
 *   put:
 *     summary: Actualiza un médico por cédula.
 *     tags: [Medico]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         description: Cédula del médico a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos del médico.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/medico/request'
 *     responses:
 *       '200':
 *         description: Médico actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/medico/response'
 *       '301':
 *         description: Médico no encontrado.
 *       '404':
 *         description: Error del servidor al actualizar médico.
 */
router.put(
  "/rest/medico/:cedula", 
  MedicoController.updateMedico
);

/**
 * @openapi
 * /rest/medico/{cedula}:
 *   delete:
 *     summary: Elimina un médico por cédula.
 *     tags: [Medico]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         description: Cédula del médico a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Médico eliminado exitosamente.
 *       '301':
 *         description: Médico no encontrado.
 *       '404':
 *         description: Error del servidor al eliminar médico.
 */
router.delete(
  "/rest/medico/:cedula",
  MedicoController.deleteMedico
);

export default router;
