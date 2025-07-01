export class CPF {
    value: string

    constructor(cpf: string) {
        if (!this.validateCPF(cpf)) {
            throw new Error('Invalid CPF')
        }
        this.value = cpf
    }

    private validateCPF(cpf: string) {
        // Remove caracteres não numéricos
        const cpfLimpo = cpf.replace(/\D/g, '');

        // Verifica se tem 11 dígitos ou é uma sequência repetida (ex: 111.111.111-11)
        if (!cpfLimpo || cpfLimpo.length !== 11 || /^(\d)\1{10}$/.test(cpfLimpo)) {
            return false;
        }

        const cpfArray = cpfLimpo.split('').map(d => parseInt(d, 10));

        // Validação do primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += cpfArray[i] * (10 - i);
        }
        let primeiroDigito = 11 - (soma % 11);
        if (primeiroDigito >= 10) primeiroDigito = 0;

        // Validação do segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += cpfArray[i] * (11 - i);
        }
        let segundoDigito = 11 - (soma % 11);
        if (segundoDigito >= 10) segundoDigito = 0;

        // Verifica se os dígitos calculados coincidem com os fornecidos
        return primeiroDigito === cpfArray[9] && segundoDigito === cpfArray[10];
    }
}