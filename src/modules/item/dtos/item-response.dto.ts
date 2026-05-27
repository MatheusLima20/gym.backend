import { ItemEntity } from "../entities/ItemEntity";

export type ItemResponseDTO = Pick<
    ItemEntity,
    "uid" | "name" | "description" | "platform" | "orderId" | "value" | "createdAt" | "updatedAt"
>;
