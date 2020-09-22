import { initialConfig } from "./config";
import express from "express";
import morgan from "morgan";
import pkg from '../package.json';
import { createRoles } from "./libs/initialSetup";
import productsRouter from "./routes/products.routes";
import authRouter from "./routes/auth.routes";
import usersRouter from "./routes/users.routes";
import "regenerator-runtime";
import dotenv from "dotenv";

initialConfig();

const app = express();
createRoles();

app.set("pkg", pkg);

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        name: app.get("pkg").name,
        author: app.get("pkg").author,
        description: app.get("pkg").description,
        version: app.get("pkg").version
    });
});

app.use("/api/v1/products", productsRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);

export default app;