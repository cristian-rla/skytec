export interface UserLogin {
    usuario:string,
    contrasena:string
}

export interface UserData extends UserLogin{
    nombre:string;
    correo:string;
}