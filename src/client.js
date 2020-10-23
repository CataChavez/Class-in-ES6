class Client{
	constructor(name, taxes = {}) {
		this._name = name;
		this.taxes = taxes;
	}

	get name(){
		return this._name;
	}

	set name(newName){
		this._name = newName;
	}

	calc_taxes() {
		if(!this.taxes.annual_gross_amount && this.taxes.expenses){
			return 0
		}
		this.taxes.annual_gross_amount - this.taxes.expenses * 1.21
	}
}

export default Client;