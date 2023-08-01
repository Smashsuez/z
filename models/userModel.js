import { Schema ,model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique: true
    },
    state: {
        type: String,
        required : true,
    },
    password: String,
    cash: {
        type: Number,
        default: 0
    },
    phone: {
        type: Number,
        default: 0,
        required: true
    },
    image: String,
    role: {
        type: String,
        default: 'user'
    },
    provider: {
        type: String,
        default: 'credentials'
    }
}, {timestamps: true})

const User = models.user || model('user', userSchema)

export default User