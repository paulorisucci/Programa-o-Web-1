class ClienteEspecial extends Cliente{

    private contaEspecial: Conta;

    constructor(nome: string, cpf: string, conta: Conta, contaEspecial: Conta) {
        super(nome, cpf, conta);
        this.contaEspecial = contaEspecial;
    }

    public getConta(): Conta {
        return this.contaEspecial;
    }

    public setConta(contaEspecial: Conta): void {
        this.contaEspecial = contaEspecial;
    }

    public saldoTotal() : Number {
        return this.contaEspecial.saldo + this.getConta().saldo;
    }
}