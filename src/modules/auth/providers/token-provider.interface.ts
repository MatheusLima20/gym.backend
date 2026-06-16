import { AuthUser } from "@/shared/context/auth.user";


export interface ITokenProvider {
    generate(userUID: string, platformUID: string): Promise<string>;
    verify(token: string): Promise<AuthUser>;
}
