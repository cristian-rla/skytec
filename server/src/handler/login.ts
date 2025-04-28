import { Request, Response, NextFunction } from "express";
import { LoginController } from "../controller/login";
import { singleLogin } from "../database/login";

const loginController = new LoginController(singleLogin);

class LoginHandler {
    async verifyData(req:Request, res:Response, next:NextFunction){
        try{
            const user = await loginController.verifyLogin(req.body);
            res.status(200).json({message: "Usuario encontrado !!", user});
        } catch (error){
            if (error instanceof Error)
                res.status(500).json({message: error.message});
            else
                res.status(500).json({message: "Hubo un error en la búsqueda"});

        }
    }
}

export default new LoginHandler();