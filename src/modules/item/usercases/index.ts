import { Item } from "../entities/ItemEntity";
import { IItemRepository } from "../repositories/IItemRepository";

export class ItemUseCase {

    constructor(private itemRepository: IItemRepository) {}

    async execute(data: Item) {

        const itemAlreadyExists =
            await this.itemRepository
                .getByUID(data.uid);

        if (itemAlreadyExists) {
            throw new Error("Item already exists");
        }

        const item = new Item(data);

        const success = await this.itemRepository
            .register(item);

        return success;
    }
    
}
