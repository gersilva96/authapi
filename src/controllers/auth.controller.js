import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

const authController = {
    signup: async (req, res) => {
        try {
            const { username, email, password, roles } = req.body;
            const newUser = new User({
                username,
                email,
                password: await User.encryptPassword(password)
            });
            if (roles) {
                const foundRoles = await Role.find({name: {$in: roles}});
                newUser.roles = foundRoles.map(role => role._id);
            } else {
                const role = await Role.findOne({name: "user"});
                newUser.roles = [role._id];
            }
            const savedUser = await newUser.save();
            const token = jwt.sign({
                id: savedUser._id
            }, config.SECRET, {
                expiresIn: 86400
            });
            res.json({token});
        } catch (error) {
            res.status(400).json({error});
        }
    },
    signin: async (req, res) => {
        try {
            const { email, password } = req.body;
            const existingUser = await User.findOne({email}).populate("roles");
            if (!existingUser) {
                return res.status(400).json({token: null, error: {message: "El usuario no existe"}});
            }
            const matchPassword = await User.comparePassword(password, existingUser.password);
            if (!matchPassword) {
                return res.status(400).json({token: null, error: {message: "La contraseña es incorrecta"}})
            }
            const token = jwt.sign({
                id: existingUser._id
            }, config.SECRET, {
                expiresIn: 86400
            });
            res.json({token});
        } catch (error) {
            res.status(400).json({error});
        }
    }
};

export default authController;