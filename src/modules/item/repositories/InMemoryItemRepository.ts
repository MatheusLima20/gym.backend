import { IItem } from "../entities/IItem";
import { Item } from "../entities/ItemEntity";
import { IItemRepository } from "./IItemRepository";

export class InMemoryItemRepository implements IItemRepository {
    items: Item[] = [];

    async getByUID(id: string): Promise<Item | null> {
        return this.items.find((item) => item.uid === id) || null;
    }
    async register(item: IItem): Promise<boolean> {
        try {
            this.items.push(item);

            return true;
        } catch (error) {
            return false;
        }
    }
    change(item: IItem): Promise<IItem | null> {
        throw new Error("Method not implemented.");
    }
    delete(item: IItem): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
}
