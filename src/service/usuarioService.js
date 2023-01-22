import { Usuario } from '@/model/Usuario.js';

export default {

    login: function (usuario = new Usuario) {
        return http.post("usuario/logon", usuario);
    }


}