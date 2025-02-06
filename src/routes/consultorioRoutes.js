import express from "express";
import * as ConsultorioController from "../controllers/consultorioController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/consultorios:
 *   get:
 *     summary: Obtiene todos los consultorios activos
 *     tags: [Consultorios]
 *     responses:
 *       200:
 *         description: Lista de consultorios obtenida exitosamente
 */
router.get("/rest/consultorios", AuthMiddleware.requireAuth, ConsultorioController.getConsultorios);

/**
 * @openapi
 * /rest/consultorios/{id}:
 *   get:
 *     summary: Obtiene un consultorio por ID
 *     tags: [Consultorios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
router.get("/rest/consultorios/:id", AuthMiddleware.requireAuth, ConsultorioController.getConsultorioById);

/**
 * @openapi
 * /rest/consultorios:
 *   post:
 *     summary: Crea un nuevo consultorio
 *     tags: [Consultorios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ubicacion
 *             properties:
 *               ubicacion:
 *                 type: string
 */
router.post("/rest/consultorios", AuthMiddleware.requireAuth, ConsultorioController.createConsultorio);

/**
 * @openapi
 * /rest/consultorios/{id}:
 *   put:
 *     summary: Actualiza un consultorio
 *     tags: [Consultorios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
router.put("/rest/consultorios/:id", AuthMiddleware.requireAuth, ConsultorioController.updateConsultorio);

/**
 * @openapi
 * /rest/consultorios/{id}:
 *   delete:
 *     summary: Elimina un consultorio (soft delete)
 *     tags: [Consultorios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/rest/consultorios/:id", AuthMiddleware.requireAuth, ConsultorioController.deleteConsultorio);

export default router;