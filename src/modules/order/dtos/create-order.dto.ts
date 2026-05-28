import { OrderEntity } from "../entities/order.entity";

export type CreateOrderDTO = Pick<OrderEntity, "description" | "platform">;

export type CreateOrderResponseDTO = Pick<OrderEntity, "uid" | "description">;
