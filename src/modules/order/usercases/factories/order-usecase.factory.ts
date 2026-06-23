import { AuthUser } from "@/shared/context/auth.user";
import { OrderUsecase } from "../order.usecase";
import { InMemoryOrderRepository } from "../../repositories/implementations/in-memory-order.repository";

export function makeOrderUsecase(
    user: AuthUser,
    orderRepository: InMemoryOrderRepository,
) {
    const context = { user };

    return {
        usecase: new OrderUsecase(context, orderRepository),
    };
}
