import express from "express";
import * as TratamientoController from "../controllers/tratamientoController.js";
import AuthMiddleware from "../config/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /rest/tratamientos:
 *   get:
 *     summary: Obtiene todos los tratamientos activos
 *     tags: [Tratamientos]
 *     responses:
 *       200:
 *         description: Lista de tratamientos obtenida exitosamente
 *       500:
 *         description: Error del servidor
 */
router.get("/rest/tratamientos", AuthMiddleware.requireAuth, TratamientoController.getTratamientos);

/**
 * @openapi
 * /rest/tratamientos/{id}:
 *   get:
 *     summary: Obtiene un tratamiento por ID
 *     tags: [Tratamientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tratamiento encontrado
 *       404:
 *         description: Tratamiento no encontrado
 */
router.get("/rest/tratamientos/:id", AuthMiddleware.requireAuth, TratamientoController.getTratamientoById);

/**
 * @openapi
 * /rest/tratamientos/atencion/{atencionId}:
 *   get:
 *     summary: Obtiene tratamientos por ID de atención
 *     tags: [Tratamientos]
 *     parameters:
 *       - in: path
 *         name: atencionId
 *         required: true
 *         schema:
 *           type: integer
 */
router.get("/rest/tratamientos/atencion/:atencionId", AuthMiddleware.requireAuth, TratamientoController.getTratamientosByAtencion);

/**
 * @openapi
 * /rest/tratamientos:
 *   post:
 *     summary: Crea un nuevo tratamiento
 *     tags: [Tratamientos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - secuencialAtencion
 *             properties:
 *               secuencialAtencion:
 *                 type: integer
 *               descripcion:
 *                 type: string
 *               observaciones:
 *                 type: string
 */
router.post("/rest/tratamientos", AuthMiddleware.requireAuth, TratamientoController.createTratamiento);

/**
 * @openapi
 * /rest/tratamientos/{id}:
 *   put:
 *     summary: Actualiza un tratamiento
 *     tags: [Tratamientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
router.put("/rest/tratamientos/:id", AuthMiddleware.requireAuth, TratamientoController.updateTratamiento);

/**
 * @openapi
 * /rest/tratamientos/{id}:
 *   delete:
 *     summary: Elimina un tratamiento (soft delete)
 *     tags: [Tratamientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/rest/tratamientos/:id", AuthMiddleware.requireAuth, TratamientoController.deleteTratamiento);

export default router;