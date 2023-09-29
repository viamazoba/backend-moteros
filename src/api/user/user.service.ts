import User from "./user.model";
import { userInput } from "./user.types";
import { hashPassword } from "../../auth/utils/bcrypt";

export const createUser = async (userInfo : userInput) =>{

    try{
        const hashedPassword = await hashPassword(userInfo.password);
        const data : userInput = {
            ...userInfo,
            password: hashedPassword
        }

        const user = await User.create(data)

        return user

    }catch(error: any){

        return error
    }

    

}


export async function getUserByEmail(userEmail: string) {

    try{
  
      const user = await User.findOne({email: userEmail});

      if(!user){
        return null
      }

    //   const data: userInput = {
    //     name: user.name,
    //     lastName: user.lastName,
    //     email: user.email,
    //     password: user.password,
    //     avatar: user.avatar
    // }
      return user;

    }catch(error){
      console.error('Error consulting user:', error)
      return null
    }
  }