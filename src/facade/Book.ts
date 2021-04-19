import Product from './Product';

class Book extends Product {
    private synopsis: string;


	constructor($id: number, $name: string, $synopsis: string) {
        super($id, $name);
		this.synopsis = $synopsis;
    }

    /**
     * Getter $synopsis
     * @return {string}
     */
	public get $synopsis(): string {
		return this.synopsis;
	}

    /**
     * Setter $synopsis
     * @param {string} value
     */
	public set $synopsis(value: string) {
		this.synopsis = value;
	}   
}

export default Book;