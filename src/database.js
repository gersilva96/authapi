import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/authapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db => console.log("DB is connected"))
    .catch(error => console.log(error));