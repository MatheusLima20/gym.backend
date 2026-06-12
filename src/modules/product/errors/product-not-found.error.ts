export class ProductNotFoundError extends Error {
    constructor(product: {uid?: string, name?: string}) {
        super(
            product.uid
                ? `Product '${product.uid}' not found.`
                : `Product '${product.name}' not found.`,
        );

        this.name = "ProductNotFoundError";
    }
}
