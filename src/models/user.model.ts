import mongoose from "mongoose";

interface userInterface {  id: String;  name: String; email: String; age: Number;}

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
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

const initUser = mongoose.model('User', userSchema);

export const User = (attr:userInterface) => {
    return new initUser(attr);
}