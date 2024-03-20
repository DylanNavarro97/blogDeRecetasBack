import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers.js";

const router = Router();

router.route("/productos").get(listarRecetas).post(crearReceta)
router.route('/producto/:id').get(obtenerReceta).put(editarReceta).delete(borrarReceta)

export default router;
