class ClientesController{

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputNumConta: HTMLInputElement;
    private inputNovoSaldo: HTMLInputElement;

    private clientes: Clientes;
    private contas: Contas;

    constructor(){
        this.inputNome = <HTMLInputElement>document.querySelector('#nome');
        this.inputCpf = <HTMLInputElement>document.querySelector('#cpf');
        this.inputNumConta = <HTMLInputElement>document.querySelector('#numConta');
        this.inputNovoSaldo = <HTMLInputElement>document.querySelector('#saldoConta');

        this.clientes = new Clientes()
        this.contas = new Contas();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        
        let novaConta = new Conta(this.inputNumConta.value,
            parseFloat(this.inputNovoSaldo.value));

        this.contas.inserir(novaConta);
        console.log(novaConta)
        
        let novoCliente = new Cliente(
            this.inputNome.value, 
            this.inputCpf.value,
            novaConta
        )

        this.clientes.inserir(novoCliente);
        console.log(novoCliente);
        
    }

    
}