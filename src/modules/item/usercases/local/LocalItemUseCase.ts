import { randomUUID } from "crypto";
import { CreateItemDTO } from "../../dtos/create-item.dto";
import { ItemEntity } from "../../entities/ItemEntity";
import { IItemRepository } from "../../repositories/IItemRepository";

export class InMemoryItemUseCase {
    constructor(private itemRepository: IItemRepository) {}

    async execute(data: CreateItemDTO) {
        const itemAlreadyExists = await this.itemRepository.getByName(
            data.name,
        );

        if (itemAlreadyExists) {
            throw new Error("Item already exists!");
        }

        const item = new ItemEntity({
            uid: randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
            ...data,
        });

        const success = await this.itemRepository.register(item);

        return success;
    }

    async findByUId(uid: string | undefined) {

        if (!uid) {
            throw new Error("Id not found!");
        }

        const item = await this.itemRepository.getByUID(uid);

        return item;
    }

    async findByName(name: string) {
        const item = await this.itemRepository.getByName(name);

        return item;
    }

    async change(data: ItemEntity) {}
}
