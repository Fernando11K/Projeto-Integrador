import { Usuario } from '/src/model/Usuario.js';

import { api } from 'src/boot/axios';

export default {

    login: function (usuario = new Usuario) {
        return api.post("/auth", usuario);
    }


}