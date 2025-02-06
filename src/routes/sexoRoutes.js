import express from "express";
import SexoController from "../controllers/sexoController.js";

const router = express.Router();

/**
 * @openapi
 * /rest/sexo:
 *   post:
 *     summary: Crea un nuevo registro de sexo.
 *     tags: [Sexo]
 *     requestBody:
 *       description: Datos del sexo a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sexo/request'
 *     responses:
 *       '201':
 *         description: Sexo creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sexo/response'
 *       '404':
 *         description: Error del servidor al crear el registro de sexo.
 */
router.post("/rest/sexo", SexoController.createSexo);

/**
 * @openapi
 * /rest/sexos:
 *   get:
 *     summary: Obtiene un listado de registros de sexo.
 *     tags: [Sexo]
 *     responses:
 *       '201':
 *         description: Listado de sexos obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/sexo/response'
 *       '404':
 *         description: Error del servidor al obtener el listado de sexos.
 */
router.get("/rest/sexos", SexoController.getSexos);

/**
 * @openapi
 * /rest/sexo/{secuencial}:
 *   get:
 *     summary: Obtiene un registro de sexo por secuencial.
 *     tags: [Sexo]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del registro de sexo a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Registro de sexo encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sexo/response'
 *       '301':
 *         description: Registro de sexo no encontrado.
 *       '404':
 *         description: Error del servidor al obtener el registro de sexo.
 */
router.get("/rest/sexo/:secuencial", SexoController.getBySexo);

/**
 * @openapi
 * /rest/sexo/{secuencial}:
 *   put:
 *     summary: Actualiza un registro de sexo por secuencial.
 *     tags: [Sexo]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del registro de sexo a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nuevos datos del registro de sexo.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sexo/request'
 *     responses:
 *       '201':
 *         description: Registro de sexo actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sexo/response'
 *       '301':
 *         description: Registro de sexo no encontrado.
 *       '404':
 *         description: Error del servidor al actualizar el registro de sexo.
 */
router.put("/rest/sexo/:secuencial", SexoController.updateSexo);

/**
 * @openapi
 * /rest/sexo/{secuencial}:
 *   delete:
 *     summary: Elimina un registro de sexo por secuencial.
 *     tags: [Sexo]
 *     parameters:
 *       - in: path
 *         name: secuencial
 *         required: true
 *         description: Secuencial del registro de sexo a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Registro de sexo eliminado exitosamente.
 *       '301':
 *         description: Registro de sexo no encontrado.
 *       '404':
 *         description: Error del servidor al eliminar el registro de sexo.
 */
router.delete("/rest/sexo/:secuencial", SexoController.deleteSexo);

export default router;
