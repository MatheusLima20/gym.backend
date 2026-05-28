import { OrderEntity } from "../entities/order.entity";

export type UpdateOrderDTO = Pick<
    OrderEntity,
    "uid" | "description"
>;

export type UpdateOrderResponseDTO = Pick<
    OrderEntity,
    "uid" | "description" | "updatedAt"
>;
