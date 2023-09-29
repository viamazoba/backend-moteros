import { Schema , model } from "mongoose";

const userSchema = new Schema(
    {
        name: String,
        lastName: String,
        email: {
            type: String,
            unique: true,
            require: true
        },
        password: String,
        avatar: {
            type: String,
            require: false,
            default: 'default-avatar.jpg'
        },
        role: {
            type: String,
            default: 'user',
            require: false
        }
    },
    {
        timestamps:true,
        versionKey: false
    }
)

export const User = model('user', userSchema)

export default User
