import express from "express";
import MedicamentoController from "../controllers/MedicamentosController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/medicamentos:
 *   get:
 *     summary: Obtiene listado de medicamentos
 *     tags: [Medicamentos]
 *     responses:
 *       '200':
 *         description: Listado obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Medicamento/response'
 */
router.get("/rest/medicamentos", AuthMiddleware.requireAuth, MedicamentoController.getAll);

/**
 * @openapi
 * /rest/medicamentos/secuencial/{secuencial}:
 *   get:
 *     summary: Obtiene un medicamento por secuencial
 *     tags: [Medicamentos]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         schema:
 *           type: integer
 */
router.get("/rest/medicamentos/secuencial/:secuencial", AuthMiddleware.requireAuth, MedicamentoController.getOne);

/**
 * @openapi
 * /rest/medicamentos:
 *   post:
 *     summary: Crea un nuevo medicamento
 *     tags: [Medicamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medicamento/request'
 */
router.post("/rest/medicamentos", AuthMiddleware.requireAuth, MedicamentoController.create);

/**
 * @openapi
 * /rest/medicamentos/{secuencial}:
 *   put:
 *     summary: Actualiza un medicamento
 *     tags: [Medicamentos]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         schema:
 *           type: integer
 */
router.put("/rest/medicamentos/:secuencial", AuthMiddleware.requireAuth, MedicamentoController.update);

/**
 * @openapi
 * /rest/medicamentos/{secuencial}:
 *   delete:
 *     summary: Elimina un medicamento
 *     tags: [Medicamentos]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/rest/medicamentos/:secuencial", AuthMiddleware.requireAuth, MedicamentoController.delete);

export default router;