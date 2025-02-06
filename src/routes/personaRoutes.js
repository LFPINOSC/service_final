import express from "express";
import PersonaController from "../controllers/personaController.js";

const router = express.Router();

/**
 * @openapi
 * /rest/persona:
 *   post:
 *     summary: Crea una nueva persona.
 *     tags: [Persona]
 *     requestBody:
 *       description: Datos de la persona a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/persona/request'
 *     responses:
 *       '201':
 *         description: Persona creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/persona/response'
 *       '404':
 *         description: Error del servidor al crear persona.
 */
router.post("/rest/persona", PersonaController.createPersona);

/**
 * @openapi
 * /rest/personas:
 *   get:
 *     summary: Obtiene un listado de personas.
 *     tags: [Persona]
 *     responses:
 *       '201':
 *         description: Listado de personas obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/persona/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de personas.
 */
router.get("/rest/personas", PersonaController.getPersonas);

/**
 * @openapi
 * /rest/persona/cedula/{cedula}:
 *   get:
 *     summary: Obtiene una persona por cedula.
 *     tags: [Persona]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         description: Cedula de la persona a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Persona encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/persona/response'
 *       '301':
 *         description: Persona no encontrada.
 *       '404':
 *         description: Error del servidor al obtener persona.
 */
router.get("/rest/persona/cedula/:cedula", PersonaController.getByPersona);

/**
 * @openapi
 * /rest/persona/{cedula}:
 *   put:
 *     summary: Actualiza una persona por cedula.
 *     tags: [Persona]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         description: Cedula de la persona a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos de la persona.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/persona/request'
 *     responses:
 *       '201':
 *         description: Persona actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/persona/response'
 *       '301':
 *         description: Persona no encontrada.
 *       '404':
 *         description: Error del servidor al actualizar persona.
 */
router.put("/rest/persona/:cedula", PersonaController.updatePersona);

/**
 * @openapi
 * /rest/persona/{cedula}:
 *   delete:
 *     summary: Elimina una persona por cedula.
 *     tags: [Persona]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         description: Cedula de la persona a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Persona eliminada exitosamente.
 *       '301':
 *         description: Persona no encontrada.
 *       '404':
 *         description: Error del servidor al eliminar persona.
 */
router.delete("/rest/persona/:cedula", PersonaController.deletePersona);

export default router;
