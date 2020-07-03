export default class Product {
    id = 0;
    name = '';
    price = 0;
    imgsrc:any;

    constructor(id:number, name:string, price:number, imgsrc:any) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgsrc = imgsrc;
    }
}
