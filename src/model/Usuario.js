export class Usuario { 
    constructor(
        idUsuario = Number,
        nome = String,
        sobrenome = String,
        senha = Number,
        email = String,
        

        
    ) { 
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.senha = senha;
        this.email = email;

    }

}