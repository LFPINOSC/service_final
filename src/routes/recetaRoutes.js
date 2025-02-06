import express from "express";
import { recetaController } from "../controllers/RecetasController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/recetas:
 *   post:
 *     summary: Crea una nueva receta
 *     tags: [Recetas]
 *     requestBody:
 *       description: Datos de la receta a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Receta/request'
 *     responses:
 *       '201':
 *         description: Receta creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Receta/response'
 */
router.post("/rest/recetas", AuthMiddleware.requireAuth, recetaController.create);

/**
 * @openapi
 * /rest/recetas:
 *   get:
 *     summary: Obtiene listado de recetas
 *     tags: [Recetas]
 *     responses:
 *       '200':
 *         description: Listado de recetas obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Receta/response'
 */
router.get("/rest/recetas", AuthMiddleware.requireAuth, recetaController.getAll);

/**
 * @openapi
 * /rest/recetas/secuencial/{secuencial}:
 *   get:
 *     summary: Obtiene una receta por secuencial
 *     tags: [Recetas]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: secuencial de la receta
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Receta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Receta/response'
 */
router.get("/rest/recetas/secuencial/:secuencial", AuthMiddleware.requireAuth, recetaController.getOne);

/**
 * @openapi
 * /rest/recetas/{secuencial}:
 *   put:
 *     summary: Actualiza una receta
 *     tags: [Recetas]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Receta/request'
 *     responses:
 *       '200':
 *         description: Receta actualizada exitosamente
 */
router.put("/rest/recetas/:secuencial", AuthMiddleware.requireAuth, recetaController.update);

/**
 * @openapi
 * /rest/recetas/{secuencial}:
 *   delete:
 *     summary: Elimina una receta
 *     tags: [Recetas]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Receta eliminada exitosamente
 */
router.delete("/rest/recetas/:secuencial", AuthMiddleware.requireAuth, recetaController.delete);

export default router;