import express from "express";
import UsersController from "../controllers/UsersController.js";
import AuthentificationController from "../controllers/AuthentificationController.js";
import AuthMiddleware from "../middlewares/auth.js";
import CardsController from "../controllers/CardsController.js";

const router = express.Router();

router.get("/users", UsersController.index);
router.post("/users", UsersController.store);

router.get("/users/:id", UsersController.show);
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.destroy);

router.post("/login", AuthentificationController.login);

router.get(
    "/getMyProfil",
    AuthMiddleware.authenticate,
    UsersController.getMyProfil
);

router.get("/cards/:id", CardsController.index);
router.post("/cards", CardsController.store);
router.delete("/cards/:id", CardsController.destroy);

export default router;
