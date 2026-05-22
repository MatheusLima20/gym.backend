import { IOrder } from "../entities/IOrder";
import { IOrderRepository } from "../repositories/IOrderRepository";


export class OrderController implements IOrderRepository {
    getByUID(id: string): Promise<IOrder | null> {
        throw new Error("Method not implemented.");
    }
    register(order: IOrder): Promise<IOrder | null> {
        throw new Error("Method not implemented.");
    }
    change(order: IOrder): Promise<IOrder | null> {
        throw new Error("Method not implemented.");
    }
    delete(order: IOrder): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }

}
