import { IOrder } from "../entities/IOrder";
import { Order } from "../entities/OrderEntity";
import { IOrderRepository } from "../repositories/IOrderRepository";

export class OrderUseCase implements IOrderRepository {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }
    getByUID(id: string): Promise<IOrder | null> {
        throw new Error("Method not implemented.");
    }
    register(order: IOrder): Promise<IOrder | null> {
        
        return order;
        
    }
    change(order: IOrder): Promise<IOrder | null> {
        throw new Error("Method not implemented.");
    }
    delete(order: IOrder): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }

    

}
