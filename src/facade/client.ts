import Book from "./Book";
import Facade from "./Facade";
import Order from "./Order";
import Product from "./Product";


let products = new Array<Product>();
let orders = new Array<Order>();
const facade = new Facade(products, orders);

facade.insertBook("Senhor dos Anais", "É bom");
facade.insertBook("Senhor dos dinossauros", "É bom");
facade.insertBook("Seja foda", "É bom");
facade.removBook ("Senhor dos Anais");
facade.insertBook("Senhor dos dinossauros 2", "É bom");
products.unshift(new Book(0,"As duas Torres","É bom"));
orders.push(new Order(0,products[2],1));
products.splice(2,1);
facade.insertOrder("As duas Torres",1);
console.log(orders);
console.log(products);