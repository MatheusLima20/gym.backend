import { randomUUID } from "crypto";
import { IProductRepository } from "../repositories/product-repository.interface";
import { CreateProductDTO } from "../dtos/create-product.dto";
import { ProductEntity } from "../entities/product.entity";
import { UpdateProductDTO } from "../dtos/update-product.dto";
import { SearchProductDTO } from "../dtos/search-product.dto";
import { RequestContext } from "@/shared/context/request-context";
import { ProductAlreadyExistsError } from "../errors/product-already-exists.error";
import { ProductNotFoundError } from "../errors/product-not-found.error";
import { PersistenceError } from "@/shared/errors/persistence.error";

export class ProductUsecase {
    constructor(
        private readonly context: RequestContext,
        private readonly productRepository: IProductRepository,
    ) {}

    async create(data: CreateProductDTO) {
        await this.validateProductAlreadyExists(
            data.name,
            this.context.user.platformUID,
        );

        const product = new ProductEntity({
            uid: randomUUID(),
            platformUID: this.context.user.platformUID,
            createdBy: this.context.user.uid,
            createdAt: new Date(),
            updatedAt: new Date(),
            updatedBy: null,
            ...data,
        });

        const created = await this.productRepository.register(product);

        if (!created) {
            throw new PersistenceError("Failed to create product.");
        }

        return created;
    }

    async findByUID(uid: string) {
        const product = await this.productRepository.findByUID(
            uid,
            this.context.user.platformUID,
        );

        if (!product) {
            throw new ProductNotFoundError({ uid });
        }

        return product;
    }

    async findByName(name: string) {
        const product = await this.productRepository.findByName(
            name,
            this.context.user.platformUID,
        );

        if (!product) {
            throw new ProductNotFoundError({ name });
        }

        return product;
    }

    async search(filters: SearchProductDTO) {
        const products = await this.productRepository.search({
            ...filters,
            platformUID: this.context.user.platformUID,
        });

        return products;
    }

    async find() {
        const product = await this.productRepository.find(
            this.context.user.platformUID,
        );

        return product;
    }

    async update(data: UpdateProductDTO) {
        const oldProduct = await this.findByUID(data.uid);

        await this.validateProductAlreadyExists(
            data.name,
            oldProduct.platformUID,
            data.uid,
        );

        const mergedProduct = new ProductEntity({
            ...oldProduct,
            ...data,
            updatedAt: new Date(),
        });

        const product = await this.productRepository.update(mergedProduct);

        if (!product) {
            throw new PersistenceError("Failed to update product.");
        }

        return product;
    }

    async delete(uid: string) {
        await this.findByUID(uid);

        const isDeleted = await this.productRepository.delete(uid);

        if (!isDeleted) {
            throw new PersistenceError("Failed to delete product.");
        }

        return isDeleted;
    }

    private async validateProductAlreadyExists(
        name: string,
        platformUID: string,
        uid?: string,
    ) {
        const product = await this.productRepository.findByName(
            name,
            platformUID,
        );

        if (product && product.uid !== uid) {
            throw new ProductAlreadyExistsError(name);
        }
    }
}
