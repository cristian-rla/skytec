import type { UserData, UserLogin } from "../types/userData";

export interface DBService{
    data:UserData[],
    getUserBy(data:UserLogin):Promise<UserData | undefined>,
    getUserByName(usuario:string):Promise<UserData | undefined>
}