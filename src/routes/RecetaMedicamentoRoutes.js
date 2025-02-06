import express from "express";
import RecetaMedicamentoController from "../controllers/RecetaMedicamentoController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/recetamedicamentos:
 *   get:
 *     summary: Obtiene listado de recetas medicamentos
 *     tags: [RecetaMedicamentos]
 *     responses:
 *       '200':
 *         description: Listado obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RecetaMedicamento/response'
 */
router.get("/rest/recetamedicamentos", AuthMiddleware.requireAuth, RecetaMedicamentoController.getAll);

/**
 * @openapi
 * /rest/recetamedicamentos/secuencial/{secuencial}:
 *   get:
 *     summary: Obtiene una receta medicamento por secuencial
 *     tags: [RecetaMedicamentos]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         schema:
 *           type: integer
 */
router.get("/rest/recetamedicamentos/secuencial/:secuencial", AuthMiddleware.requireAuth, RecetaMedicamentoController.getOne);

/**
 * @openapi
 * /rest/recetamedicamentos:
 *   post:
 *     summary: Crea una nueva receta medicamento
 *     tags: [RecetaMedicamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecetaMedicamento/request'
 */
router.post("/rest/recetamedicamentos", AuthMiddleware.requireAuth, RecetaMedicamentoController.create);

/**
 * @openapi
 * /rest/recetamedicamentos/{secuencial}:
 *   put:
 *     summary: Actualiza una receta medicamento
 *     tags: [RecetaMedicamentos]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         schema:
 *           type: integer
 */
router.put("/rest/recetamedicamentos/:secuencial", AuthMiddleware.requireAuth, RecetaMedicamentoController.update);

/**
 * @openapi
 * /rest/recetamedicamentos/{secuencial}:
 *   delete:
 *     summary: Elimina una receta medicamento
 *     tags: [RecetaMedicamentos]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/rest/recetamedicamentos/:secuencial", AuthMiddleware.requireAuth, RecetaMedicamentoController.delete);

export default router;