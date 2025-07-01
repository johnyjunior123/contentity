import { Address } from "./Address"
import { CPF } from "./Cpf"

interface IPerson {
    name: string
    cpf: CPF
    address: Address
}

export abstract class Person {
    name: string
    cpf: CPF
    address: Address

    constructor(person: IPerson) {
        this.name = person.name
        this.cpf = person.cpf
        this.address = person.address
    }
}