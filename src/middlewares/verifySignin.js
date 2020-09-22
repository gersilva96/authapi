import User from "../models/User";

const validRoles = ["admin", "moderator", "user"];

export const checkDuplicatedUsernameOrEmail = async (req, res, next) => {
    const username = await User.findOne({username: req.body.username});
    if (username) return res.status(400).json({error: {message: "El nombre de usuario ya existe"}});
    const email = await User.findOne({email: req.body.email});
    if (email) return res.status(400).json({error: {message: "El email ya existe"}});
    next();
}

export const checkExistingRoles = (req, res, next) => {
    const roles = req.body.roles;
    if (roles) {
        for (let i = 0; i < roles.length; i++) {
            if (!validRoles.includes(roles[i])) {
                return res.status(400).json({
                    error: {
                        message: `El rol ${roles[i]} no es válido`
                    }
                });
            }
        }
    }
    next();
};