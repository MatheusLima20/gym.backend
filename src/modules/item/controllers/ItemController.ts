import { IItem } from "../entities/IItem";
import { IItemRepository } from "../repositories/IItemRepository";


export class ItemController implements IItemRepository {
    
    async register(order: IItem): Promise<boolean | null> {
        return true;
    }
    async getByUID(id: string): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    
    change(order: IItem): Promise<IItem | null> {
        throw new Error("Method not implemented.");
    }
    delete(order: IItem): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }

}
