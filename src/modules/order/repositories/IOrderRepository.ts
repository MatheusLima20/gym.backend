import { IOrder } from "../entities/IOrder";

export interface IOrderRepository {
    getByUID(id: string): Promise<IOrder | null>;
    register(order: IOrder): Promise<IOrder | null>;
    change(order: IOrder): Promise<IOrder | null>;
    delete(order: IOrder): Promise<boolean | null>;
}
