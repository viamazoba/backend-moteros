import { Request, Response } from "express";
import { userInput} from "./user.types";
import { PayloadType } from "../../auth/auth.types";
import { createUser, getUserByEmail} from "./user.service";
import { signToken } from "../../auth/auth.service";
import { comparePassword } from "../../auth/utils/bcrypt";

export const createUserHandler =async (req:Request, res: Response) => {
    try{
        const {name, lastName, email, password, avatar} = req.body

        const newUser: userInput = {
            name,
            lastName,
            email,
            password,
            avatar
        }

        const user = await createUser(newUser)

        const dataToken = {
            id : user.id,
            email: user.email,
            role: user.role
        } as PayloadType
      
        const token =  signToken(dataToken)

      
        const responseBody = {
            message: "User was created succesfully",
            data: { 
                name: newUser.name,
                lastName: newUser.lastName,
                email: newUser.email,
                avatar: newUser.avatar
            },
        };

        // Encabezado para enviar el token
        res.header("Authorization", `Bearer ${token}`);
        res.status(201).json(responseBody)

    }catch(error:any){
        res.status(400).json({message: 'User could not created', data: error.message})
    }
}


export async function loginUserHandler(req: Request, res: Response) {

    try {
      const { email } = req.body;
      const userData = await getUserByEmail(email);
      
      if(!userData){
        return res.status(401).json({message:'Incorrect credentials'})
      }
  
      const password = userData.password as string
      const inputPassword = req.body.password
  
      const userAuthentication = await comparePassword(inputPassword, password)
  
      if(!userAuthentication){
        return res.status(401).json({message:'Incorrect credentials'})
      }


      const dataToken = {
        id : userData.id,
        email: userData.email,
        role: userData.role
      } as PayloadType
  
      const token =  signToken(dataToken)
  
      const responseBody = {
        message: "User was found succesfully",
        data: { 
            name: userData.name,
            lastName: userData.lastName,
            email: userData.email,
            avatar: userData.avatar
        },
        };
  
        res.header("Authorization", `Bearer ${token}`);
        res.status(201).json(responseBody)
  
    } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ message: 'Internal server error' }); 
    }
  }