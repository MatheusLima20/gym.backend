import { Result } from "@/shared/result";
import { ProductProps } from "../entities/product.props";

export interface IProductRepository {
    search(filters: {
        name?: string;
        description?: string;
        platformUID: string;
    }): Promise<Result<ProductProps[]>>;
    findByUID(
        uid: string,
        platformUID: string,
    ): Promise<Result<ProductProps | null>>;
    findByName(
        name: string,
        platformUID: string,
    ): Promise<Result<ProductProps | null>>;
    find(platformUID: string): Promise<Result<ProductProps[]>>;
    register(user: ProductProps): Promise<Result<ProductProps>>;
    update(user: ProductProps): Promise<Result<ProductProps>>;
    delete(uid: string): Promise<Result<void>>;
}
