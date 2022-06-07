export default interface Pedido {
    id?:string;
    email:string;
    nombrePizza:string;
    tamano:string;
    direccion:string;
    cp:string;
    precio:number;
}