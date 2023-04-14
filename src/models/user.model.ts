import mongoose from "mongoose";

interface userInterface {  id: String;  name: String; email: String; age: Number;}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
})

export const User = mongoose.model('User', userSchema);