import { Schema , model } from "mongoose";
import { format } from "date-fns"; 

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
        birthday: {
            type: Date,
            required: false,
            get: (date: Date) => {
                return format(date, "dd/MM/yy");
              },
              set: (value: string) => {
                return format(new Date(value), "yyyy-MM-dd");
              },
        },
        avatar: {
            type: String,
            require: false,
            default: '/user_icon.png'
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
