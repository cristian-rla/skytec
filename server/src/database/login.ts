import { UserData, UserLogin } from "../types/userData";

const USERS: UserData[] = [
    { usuario: "luna89", contrasena: "moOn$2025", nombre: "Luna Martínez" },
    { usuario: "torre_blanca", contrasena: "whiteTower!9", nombre: "Carlos Torre Blanca" },
    { usuario: "max_power", contrasena: "P0w3r!ful_", nombre: "Maximiliano Paredes" },
    { usuario: "delta.quartz", contrasena: "Delt@Qz123", nombre: "Diana Quartz" },
    { usuario: "echo_sky", contrasena: "SkyHigh!77", nombre: "Esteban Cielo" },
    { usuario: "nova_star", contrasena: "N0v@2025", nombre: "Noelia Estrella" },
    { usuario: "zeta_wave", contrasena: "W@veZeta9", nombre: "Zaira Olas" },
    { usuario: "shadow_x", contrasena: "Sh@dow99_", nombre: "Ximena Sombra" },
    { usuario: "ember.fire", contrasena: "Ember_456!", nombre: "Emilio Fuego" },
    { usuario: "cyber.phoenix", contrasena: "Ph03nix$5", nombre: "César Fénix" }
];

class LoginService{
    data:UserData[];
    constructor(){
        this.data = USERS;
    }
    async getUserBy(data:UserLogin):Promise<UserData | undefined>{
        return this.data.find(user => user.usuario === data.usuario && user.contrasena === data.contrasena);
    }
}

const singleLogin = new LoginService();
export {singleLogin};