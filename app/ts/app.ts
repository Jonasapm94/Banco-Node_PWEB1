// let contaController = new ContaController();

// contaController.listar();

const c1 = new Conta('1', 100);
// const p1 = new Poupanca('2', 100);
// const cb1 = new ContaBonificada('3', 0);




// console.log('Conta: ' + c1.saldo);

// p1.atualizarSaldoAniversario();
// console.log('Poupanca: ' + p1.saldo);

// cb1.creditar(100);
// console.log('Conta Bonificada: ' + cb1.saldo);




const clientesController = new ClientesController();
const clientes = new Clientes();

clientes.inserir(new Cliente('Jonas', '012345678901', c1));
console.log(clientes.listar());
for(let cliente of clientes.listar()){
    console.log(cliente);
}
console.log(clientes.pesquisar('012345678901'));

clientes.remover('012345678901');
console.log(clientes.listar());

