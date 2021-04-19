import Book from "./Book";
import Order from "./Order";
import Product from "./Product";


class Facade {
//implementacao cadastrar produto, incluir no carrinho, etc
    private products : Product[];
    private orders : Order[];

    constructor(products : Product[], orders : Order[]){
        this.products = products; 
        this.orders = orders;
    }

    /**
     * incluirProdutos
     */
    public insertBook(name : string, synopsis : string ) {
            let id = this.products.length; 
            let book;
            if(id === 0){
                book = new Book(id,name,synopsis);
            }else{
                book = new Book(this.products[id-1].$id+1,name,synopsis);
            }
            
            this.products.push(book);   
    }   

    /**
     * removBook 
     * @return {boolean}
     */
    public removBook(name : string) : boolean {
        let index = this.searchIndexOfProduct(name);
        if (index === -1 ) {
            return false
        }else{
            this.products.splice(index,1);     
            return true;           
        }
    }   
    /**
     * insertOrder
     * @return {boolean}
     */
    public insertOrder(name :string, amount : number): boolean {
        let index = this.searchIndexOfProduct(name) ;
        if(index === -1){
            return false
        }else{
            let id = this.orders.length;
            let order;
            if(id === 0){
                order = new Order(id, this.products[index],amount);
            }else{
                order = new Order(this.orders[id-1].$id+1, this.products[index],amount);
            }
            this.orders.push(order);
            this.products.slice(index,1);
            return true;
        } 
    }
    /**
     * searchIndexOfProduct
     * @returns {number}
     */
    private searchIndexOfProduct(name :string) :number {
        for (let index = 0 ; index < this.products.length; index++) {
            if (this.products[index].$name == name ) {  
                return index;           
            }
        }
        return -1;
    } 
    /**
     * searchIndexOfProduct
     * @returns {number}
     */
     private searchIndexOfOder(id :number) :number {
        for (let index = 0 ; index < this.orders.length; index++) {
            if (this.orders[index].$id == id ) {  
                return index;           
            }
        }
        return -1;
    } 
    
    

}
export default Facade;