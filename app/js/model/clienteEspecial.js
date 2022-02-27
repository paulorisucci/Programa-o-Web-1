class ClienteEspecial extends Cliente{

    constructor(nome, cpf, conta, contaEspecial) {
        super(nome, cpf, conta);
        this._contaEspecial = contaEspecial;
    }

    get contaEspecial() {
        return this._contaEspecial;
    }

    set contaEspecial(contaEspecial) {
        this._contaEspecial = contaEspecial;
    }

    saldoTotal() {
        return this._contaEspecial.saldo + this.conta.saldo;
    }
}