import User from "./user.model";
import { userInput, EditUserInput } from "./user.types";
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

      return user;

    }catch(error){
      console.error('Error consulting user:', error)
      return null
    }
}

export async function editUser(id: string, newUserInfo: EditUserInput) {
  
    try{
      const user = await User.updateOne(
        {_id: id}, newUserInfo );
      return user;
  
    }catch(error){
      return error
    }
}