import { InMemoryUserRepository } from "@/modules/user/repositories/implementations/in-memory-user.repository";
import { AuthUser } from "@/shared/context/auth.user";

export async function makeLoggedUser(
    repository: InMemoryUserRepository,
    uid = "1",
): Promise<AuthUser> {
    const user = await repository.findByUID(uid);

    if (!user) {
        throw new Error("User not found.");
    }

    return {
        uid: user.uid,
        platformUID: user.platformUID,
    };
}
