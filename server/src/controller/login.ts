import type { DBService } from "../database/DBType";
import { UserLogin, UserData } from "../types/userData";

export class LoginController {
    service:DBService;
    constructor(service:DBService){
        this.service=service;
    }
    async verifyLogin(data:UserLogin):Promise<UserData>{
        const currentUser = await this.service.getUserBy(data);
        if(!currentUser){
            if (await this.service.getUserByName(data.usuario))
                throw new Error("La contraseña es incorrecta")
            throw new Error("El usuario ingresado no existe")
        }
        return currentUser;
    }
}