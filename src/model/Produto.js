export class Produto { 
    constructor(
        idProduto = Number,
        nome = String,
        categoria = String,
        quantidade = Number,
        foto = String,
        ativo = Number

        
    ) { 
        this.idProduto = idProduto;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.foto = foto
        this.ativo = ativo;

    }

}