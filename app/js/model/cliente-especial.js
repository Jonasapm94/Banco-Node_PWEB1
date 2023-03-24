class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta, dependentes) {
        super(nome, cpf, conta);
        this._dependentes = dependentes;
    }
    get dependentes() {
        return this._dependentes;
    }
}
