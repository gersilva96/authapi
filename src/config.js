export const initialConfig = () => {
    process.env.PORT = process.env.PORT || 3000;
    process.env.NODE_ENV = process.env.NODE_ENV || "dev";
    let urlDB;
    (process.env.NODE_ENV === "dev") ? urlDB = "mongodb://localhost/authapi" : urlDB = process.env.URIDB;
    process.env.URLDB = urlDB;
}

export const tokenConfig = {
    SECRET: process.env.SECRET_KEY | "clavesecretadelproyecto",
    EXPIRES: 86400
}