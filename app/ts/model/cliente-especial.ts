class ClienteEspecial extends Cliente {
    private _dependentes: Cliente[];

    constructor(nome: string, cpf: string, conta: Conta, dependentes: Cliente[]){
        super(nome, cpf, conta);
        this._dependentes = dependentes;
    }

    get dependentes(): Cliente[]{
        return this._dependentes;
    }
}