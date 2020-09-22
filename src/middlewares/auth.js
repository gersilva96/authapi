import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token) return res.status(403).json({ error: { message: "Token no provisto" } });
        const decodedToken = jwt.verify(token, config.SECRET);
        req.userId = decodedToken.id;
        const existingUser = await User.findById(req.userId, { password: 0 }).populate("roles");
        if (!existingUser) return res.status(400).json({ error: { message: "El usuario no existe" } });
        next();
    } catch (error) {
        res.status(401).json({ error: { message: "No autorizado" } });
    }
};

export const isModerator = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).populate("roles");
        const roles = await Role.find({_id: {$in: user.roles}});
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "moderator") {
                return next();
            }
        }
        return res.status(403).json({error: {message: "Requiere ser moderador"}});
    } catch (error) {
        res.status(403).json({error: {message: "No tennés los permisos para realizar esta acción"}});
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).populate("roles");
        const roles = await Role.find({_id: {$in: user.roles}});
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
                return next();
            }
        }
        return res.status(403).json({error: {message: "Requiere ser administrador"}});
    } catch (error) {
        res.status(403).json({error: {message: "No tennés los permisos para realizar esta acción"}});
    }
};