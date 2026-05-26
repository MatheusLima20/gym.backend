import { ItemResponseDTO } from "../dtos/create-item.dto";
import { IItem } from "../entities/interfaces/IItem";
import { ItemEntity } from "../entities/ItemEntity";
import { IItemRepository } from "./IItemRepository";

export class InMemoryItemRepository implements IItemRepository {
    items: ItemEntity[] = [];

    async getByUID(uid: string): Promise<ItemEntity | null> {
        return this.items.find((item) => item.uid === uid) || null;
    }

    async getByName(name: string): Promise<ItemEntity | null> {
        return this.items.find((item) => item.name === name) || null;
    }

    async register(item: IItem): Promise<ItemResponseDTO | null> {
        try {
            this.items.push(item);

            return item;
        } catch (error) {
            return null;
        }
    }

    async update(item: IItem): Promise<IItem | null> {
        throw new Error("Method not implemented.");
    }

    delete(item: IItem): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
}
