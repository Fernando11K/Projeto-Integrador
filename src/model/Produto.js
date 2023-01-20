export class Produto { 
    constructor(
        idProduto = String,
        nome = String,
        categoria = String,
        quantidade = String,
        foto = String,
        ativo = Number

        
    ) { 
        this.idProduto = idProduto;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.ativo = ativo;

    }

}