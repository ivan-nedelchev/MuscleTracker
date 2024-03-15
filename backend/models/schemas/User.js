import {Schema, model} from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        minlength: 3,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const User = model('User', userSchema);
