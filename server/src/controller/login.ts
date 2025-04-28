import type { DBService } from "../database/DBType";
import { UserLogin, UserData } from "../types/userData";

export class LoginController {
    service:DBService;
    constructor(service:DBService){
        this.service=service;
    }
    async verifyLogin(data:UserLogin):Promise<UserData>{
        const currentUser = await this.service.getUserBy(data);
        if(!currentUser)
            throw new Error("Los datos ingresados son incorrectos")
        return currentUser;
    }
}