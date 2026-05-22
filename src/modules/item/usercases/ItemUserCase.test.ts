import { ItemUseCase } from ".";
import { InMemoryItemRepository } from "../repositories/InMemoryItemRepository";

describe("InMemoryItem", () => {
    test("Should register item just once item.register", async () => {
        const repository = new InMemoryItemRepository();

        const useCase = new ItemUseCase(repository);

        const result = await useCase.execute({
            uid: "1",
            orderId: '1',
            platform: 1
        });
        console.log(result);
        expect(result).toBe(true);
    });
});
