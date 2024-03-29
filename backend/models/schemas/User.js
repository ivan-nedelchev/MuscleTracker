import {Schema, model} from "mongoose"

const UserSchema = new Schema({
    username: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const User = model('User', UserSchema);
