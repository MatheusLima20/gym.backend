import { ItemResponseDTO } from "../dtos/item-response.dto";
import { ItemEntity } from "../entities/ItemEntity";

export const ItemMapper = {

    toOrderUIDResponse: (
        item: ItemEntity,
    ): ItemResponseDTO => {

        return {
            uid: item.uid,
            name: item.name,
            orderId: item.orderId,
            platform: item.platform,
            description: item.description,
            value: item.value,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
        };
    },

    toOrderUIDResponseList: (
        items: ItemEntity[],
    ): ItemResponseDTO[] => {

        return items.map(
            ItemMapper.toOrderUIDResponse
        );
    },
};