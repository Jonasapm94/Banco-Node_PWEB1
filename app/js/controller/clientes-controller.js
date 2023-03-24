class ClientesController {
    constructor() {
        this.inputNome = document.querySelector('#nome');
        this.inputCpf = document.querySelector('#cpf');
        this.inputNumConta = document.querySelector('#numConta');
        this.inputNovoSaldo = document.querySelector('#saldoConta');
        this.clientes = new Clientes();
        this.contas = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumConta.value, parseFloat(this.inputNovoSaldo.value));
        this.contas.inserir(novaConta);
        console.log(novaConta);
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta);
        this.clientes.inserir(novoCliente);
        console.log(novoCliente);
    }
}
