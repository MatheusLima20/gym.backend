import { Result } from "@/shared/result";
import { IProductRepository } from "../product-repository.interface";
import { ProductProps } from "../../entities/product.props";
import { ResultFactory } from "@/shared/result/result.factory";
import { PersistenceError } from "@/shared/errors/persistence.error";

export class InMemoryProductRepository implements IProductRepository {
    products: ProductProps[] = [
        {
            uid: "1",
            name: "Table",
            platformUID: "1",
            description: "Why Sale.",
            currentPrice: 20,
            amount: 10,
            isForSale: false,
            isOnSale: false,
            createdBy: "1",
            updatedBy: null,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    async findByName(
        name: string,
        platformUID: string,
    ): Promise<Result<ProductProps | null>> {
        const products = this.products.filter(
            (product) => product.platformUID === platformUID,
        );
        const product = products.find((product) => product.name === name);

        return ResultFactory.success(product ?? null);
    }

    async search(filters: {
        name?: string;
        description?: string;
        platformUID: string;
    }): Promise<Result<ProductProps[]>> {
        const name = filters.name?.toLowerCase();
        const description = filters.description?.toLowerCase();

        let products = this.products.filter(
            (product) => product.platformUID === filters.platformUID,
        );

        if (name) {
            products = products.filter((product) =>
                product.name.toLowerCase().includes(name),
            );
        }

        if (description) {
            products = products.filter((product) =>
                product.description?.toLowerCase().includes(description),
            );
        }

        return ResultFactory.success(products);
    }

    async find(platformUID: string): Promise<Result<ProductProps[]>> {
        const products = this.products.filter(
            (product) => product.platformUID === platformUID,
        );

        return ResultFactory.success(products);
    }

    async findByUID(
        uid: string,
        platformUID: string,
    ): Promise<Result<ProductProps | null>> {
        const products = this.products.filter(
            (product) => product.platformUID === platformUID,
        );
        const product = products.find((product) => product.uid === uid);

        return ResultFactory.success(product ?? null);
    }

    async register(product: ProductProps): Promise<Result<ProductProps>> {
        this.products.push(product);

        return ResultFactory.success(product);
    }

    async update(product: ProductProps): Promise<Result<ProductProps>> {
        const index = this.products.findIndex(
            (oldProduct) => oldProduct.uid === product.uid,
        );

        const updatedProduct = (this.products[index] = product);

        return ResultFactory.success(updatedProduct);
    }

    async delete(uid: string): Promise<Result<void>> {
        const index = this.products.findIndex(
            (oldProduct) => oldProduct.uid === uid,
        );

        const removedProduct = this.products.splice(index, 1);

        if (!removedProduct.length) {
            return ResultFactory.failure(
                new PersistenceError("Delete operation filed."),
            );
        }

        return ResultFactory.ok();
    }
}
