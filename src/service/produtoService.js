import { Produto } from "src/model/Produto";
import { api } from "src/boot/axios";


export default {

    list: function (produto = new Produto) { 
        return api.post("produto/list")
        }
}