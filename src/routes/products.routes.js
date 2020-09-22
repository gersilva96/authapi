import { Router } from "express";
import productsController from "../controllers/products.controller";
import { auth } from "../middlewares";

const router = Router();

router.get("/", productsController.getProducts);

router.get("/:id", productsController.getProductById);

router.post("/", [auth.verifyToken, auth.isModerator], productsController.createProduct);

router.put("/:id", [auth.verifyToken, auth.isAdmin], productsController.updateProductById);

router.delete("/:id", [auth.verifyToken, auth.isAdmin], productsController.deleteProductById);

export default router;