import { Usuario } from '/src/model/Usuario.js';

import { api } from 'src/boot/axios';

export default {

    login: function (usuario = new Usuario) {
        return api.post("http://192.168.0.242:8000/api/auth", usuario);
    }


}