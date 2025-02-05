import express from "express";
import TurnoController from "../controllers/TurnoController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/turno:
 *   post:
 *     summary: Crea un nuevo turno.
 *     tags: [Turno]
 *     requestBody:
 *       description: Datos del turno a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/turno/request'
 *     responses:
 *       '201':
 *         description: Turno creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/turno/response'
 *       '404':
 *         description: Error del servidor al crear turno.
 */
router.post(
  "/rest/turno", 
  TurnoController.createTurno
);

/**
 * @openapi
 * /rest/turnos:
 *   get:
 *     summary: Obtiene un listado de turnos.
 *     tags: [Turno]
 *     responses:
 *       '200':
 *         description: Listado de turnos obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/turno/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de turnos.
 */
router.get("/rest/turnos",
  TurnoController.getTurnos
);

/**
 * @openapi
 * /rest/turno/{secuencial}:
 *   get:
 *     summary: Obtiene un turno por secuencial.
 *     tags: [Turno]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del turno a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Turno encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/turno/response'
 *       '404':
 *         description: Turno no encontrado.
 */
router.get(
  "/rest/turno/:secuencial",
  TurnoController.getByTurno
);

/**
 * @openapi
 * /rest/turno/{secuencial}:
 *   put:
 *     summary: Actualiza un turno por secuencial.
 *     tags: [Turno]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del turno a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nuevos datos del turno.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/turno/request'
 *     responses:
 *       '200':
 *         description: Turno actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/turno/response'
 *       '404':
 *         description: Turno no encontrado.
 */
router.put(
  "/rest/turno/:secuencial", 
  TurnoController.updateTurno
);

/**
 * @openapi
 * /rest/turno/{secuencial}:
 *   delete:
 *     summary: Elimina un turno por secuencial.
 *     tags: [Turno]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del turno a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Turno eliminado exitosamente.
 *       '404':
 *         description: Turno no encontrado.
 */
router.delete(
  "/rest/turno/:secuencial",
  TurnoController.deleteTurno
);

export default router;

