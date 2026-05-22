import { Item } from "../entities/ItemEntity";

export interface IItemRepository {
    getByUID(id: string): Promise<Item | null>;
    register(item: Item): Promise<boolean>;
    change(item: Item): Promise<Item | null>;
    delete(item: Item): Promise<boolean | null>;
}
