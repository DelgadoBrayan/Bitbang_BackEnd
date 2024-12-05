import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
const { sign , verify} = jwt;
config({ path: '.env' });


const JWT_SECRET = process.env.JWT_SECRET

export const generateToken =(id)=>{
  
   const jwt = sign({id}, JWT_SECRET,{
    expiresIn: '2d'
   } ) 

   return jwt
}


export const verifyToken=(jwt)=>{
    try {
        const jwtValidado = verify(jwt, JWT_SECRET)

        return jwtValidado
    } catch (error) {
          return error.message;
    }
}
