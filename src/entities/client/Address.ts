interface IAddress {
    id?: number
    street: number
    digit: number
    neighborhood: string
    complement: string
    zipcode: string
    state: string
}

export class Address {
    public readonly id?: number
    public readonly street: number
    public readonly digit: number
    public readonly neighborhood: string
    public readonly complement: string
    public readonly zipcode: string
    public readonly state: string

    constructor(address: IAddress) {
        if (!this.validateZipCode(address.zipcode)) throw new Error('Invalid ZIPCODE')
        this.street = address.street
        this.digit = address.digit
        this.neighborhood = address.neighborhood
        this.complement = address.complement
        this.zipcode = address.zipcode
        this.state = address.state
    }

    private validateZipCode(zipcode: string) {
        return zipcode.replace(/\D/g, '').length != 8 || /^(\d)\1{4}$/.test(zipcode);
    }
}