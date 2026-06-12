export class PersistenceError extends Error {
    constructor(message = "Persistence operation failed.") {
        super(message);

        this.name = "PersistenceError";
    }
}
