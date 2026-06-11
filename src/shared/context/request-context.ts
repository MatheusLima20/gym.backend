import { AuthUser } from "./auth.user";

export interface RequestContext {
    user: AuthUser;
}
