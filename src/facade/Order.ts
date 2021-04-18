import Product from "./product";


class Order {
    private id: number;
    private product: Product;
    private amount: number;


	constructor($id: number, $product: Product, $amount: number) {
		this.id = $id;
		this.product = $product;
		this.amount = $amount;
	}


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $product
     * @return {Product}
     */
	public get $product(): Product {
		return this.product;
	}

    /**
     * Getter $amount
     * @return {number}
     */
	public get $amount(): number {
		return this.amount;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $product
     * @param {Product} value
     */
	public set $product(value: Product) {
		this.product = value;
	}

    /**
     * Setter $amount
     * @param {number} value
     */
	public set $amount(value: number) {
		this.amount = value;
	}
    
}

export default Order;