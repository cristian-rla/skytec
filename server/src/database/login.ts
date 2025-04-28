import { UserData, UserLogin } from "../types/userData";

const USERS: UserData[] = [
    { usuario: "luna89", contrasena: "moOn$2025", nombre: "Luna Martínez", correo: "luna89@email.com" },
    { usuario: "torre_blanca", contrasena: "whiteTower!9", nombre: "Carlos Torre Blanca", correo: "torre_blanca@email.com" },
    { usuario: "max_power", contrasena: "P0w3r!ful_", nombre: "Maximiliano Paredes", correo: "max_power@email.com" },
    { usuario: "delta.quartz", contrasena: "Delt@Qz123", nombre: "Diana Quartz", correo: "delta.quartz@email.com" },
    { usuario: "echo_sky", contrasena: "SkyHigh!77", nombre: "Esteban Cielo", correo: "echo_sky@email.com" },
    { usuario: "nova_star", contrasena: "N0v@2025", nombre: "Noelia Estrella", correo: "nova_star@email.com" },
    { usuario: "zeta_wave", contrasena: "W@veZeta9", nombre: "Zaira Olas", correo: "zeta_wave@email.com" },
    { usuario: "shadow_x", contrasena: "Sh@dow99_", nombre: "Ximena Sombra", correo: "shadow_x@email.com" },
    { usuario: "ember.fire", contrasena: "Ember_456!", nombre: "Emilio Fuego", correo: "ember.fire@email.com" },
    { usuario: "cyber.phoenix", contrasena: "Ph03nix$5", nombre: "César Fénix", correo: "cyber.phoenix@email.com" }
];


class LoginService{
    data:UserData[];
    constructor(){
        this.data = USERS;
    }
    async getUserBy(data:UserLogin):Promise<UserData | undefined>{
        return this.data.find(user => user.usuario === data.usuario && user.contrasena === data.contrasena);
    }
    async getUserByName(usuario:string):Promise<UserData | undefined>{
        return this.data.find(user => user.usuario === usuario);
    }
}

const singleLogin = new LoginService();
export {singleLogin};