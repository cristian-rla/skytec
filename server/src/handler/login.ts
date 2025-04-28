import { Request, Response, NextFunction } from "express";
import { LoginController } from "../controller/login";
import { singleLogin } from "../database/login";

const loginController = new LoginController(singleLogin);

class LoginHandler {
    async verifyData(req:Request, res:Response, next:NextFunction){
        try{
            const user = await loginController.verifyLogin(req.body);
            res.status(200).json({message: "Usuario encontrado !!", user});
        } catch{
            res.status(500).json({message: "No se encontró el usuario"});
        }
    }
}

export default new LoginHandler();