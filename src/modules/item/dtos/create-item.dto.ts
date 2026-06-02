import { ItemEntity } from "../entities/item.entity";

export type CreateItemDTO = Pick<
    ItemEntity,
    "name" | "description" | "orderUID" | "platform" | "value" | "isForSale"
>;

export type ItemCreateResponseDTO = Pick<ItemEntity, "uid" | "name" | "description" | "orderUID" | "value" | "updatedAt">;